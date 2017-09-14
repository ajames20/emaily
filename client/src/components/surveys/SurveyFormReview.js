import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReviewForm = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col s8 push-s2">
        <div className="card darken-1 black-text" style={{ padding: '20px 35px 30px 35px' }}>
          <h5>Please confirm your entries</h5>
          {reviewFields}
          <button style={{ marginTop: '25px' }} className="btn darken-2 white-text yellow" onClick={onCancel}>
            Back
          </button>
          <button
            style={{ marginTop: '25px' }}
            onClick={() => submitSurvey(formValues, history)}
            className="btn blue darken-3 white-text right"
          >
            Send Survey<i className="material-icons right">email</i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyReviewForm));
