import React, { Component } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
require('../css/main.css');

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <div>
              <div className="container">
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
