import React from 'react';
require('../../css/survey-form.css');

const SurveyField = ({ input, label }) => {
  return (
    <div className="input-field col s6">
      <input {...input} />
      <label>{label}</label>
    </div>
  );
};

export default SurveyField;
