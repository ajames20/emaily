import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name }) => {
      return <Field component={SurveyField} type="text" label={label} name={name} key={name} />;
    });
  }

  render() {
    return (
      <div className="card-styles">
        <div className="row">
          <div className="col s8 push-s2">
            <div className="card darken-1 black-text" style={{ padding: '40px 40px 60px 40px' }}>
              <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys" className="btn left red lighten-2 white-text">
                  Cancel
                </Link>
                <button className="btn right red lighten-2 white-text" type="submit">
                  Review
                  <i className="material-icons right">arrow_forward</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'Error field is required';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
