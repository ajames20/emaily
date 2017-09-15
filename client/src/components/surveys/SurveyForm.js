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
      <div className="row">
        <div className="col s10 push-s1">
          <div className="card darken-1 black-text" style={{ padding: '40px 40px 60px 40px' }}>
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
              {this.renderFields()}
              <Link to="/surveys" className="btn left red lighten-2 white-text">
                Cancel
              </Link>
              <button className="btn right red lighten-2 white-text" type="submit">
                Review
              </button>
            </form>
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
