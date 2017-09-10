module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'import'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'jsx-a11y/href-no-hash': 'off',
  },
};
