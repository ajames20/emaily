import React from 'react';
import { Link } from 'react-router-dom';

const SurveysNew = () => {
  return (
    <div>
      <h1>Surveys</h1>
      <div className="fixed-action-btn">
        <Link to="/surveys" className="btn-floating btn-large red lighten-2">
          <i className="large material-icons btn-color">arrow_back</i>
        </Link>
      </div>
    </div>
  );
};

export default SurveysNew;
