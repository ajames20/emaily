import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import { Link } from 'react-router-dom';
import SurveyReviewForm from './SurveyFormReview';

class componentName extends Component {
  state = {
    showReviewForm: false
  };

  renderContent() {
    if (this.state.showReviewForm) {
      return (
        <div>
          <h1 className="center-align skinny-font">Review Survey</h1>
          <SurveyReviewForm onCancel={() => this.setState({ showReviewForm: false })} />
        </div>
      );
    }
    return (
      <div>
        <h1 className="center-align skinny-font">New Survey</h1>
        <SurveyForm onSurveySubmit={() => this.setState({ showReviewForm: true })} />
      </div>
    );
  }

  render() {
    return <div className="hex-bg">{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'surveyForm'
})(componentName);
