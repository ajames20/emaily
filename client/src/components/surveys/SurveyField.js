import React from 'react';
require('../../css/survey-form.css');

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="text-left">
      <label>{label}</label>
      <input className="input-field" {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
