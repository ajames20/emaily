const keys = require('../config/keys');
const requireLogin = require('../middleware/requierLogin');
const stripe = require('stripe')(keys.stripePublishableKey);

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 5000,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
