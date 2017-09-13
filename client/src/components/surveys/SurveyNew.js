import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import { Link } from 'react-router-dom';

class componentName extends Component {
  render() {
    return (
      <div>
        <h1>New Survey</h1>
        <SurveyForm />
        <div className="fixed-action-btn">
          <Link to="/surveys" className="btn-floating btn-large red lighten-2">
            <i className="large material-icons">arrow_back</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default componentName;
