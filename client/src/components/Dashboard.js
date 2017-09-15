import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import '../css/main.css';

const Dashboard = () => {
  return (
    <div className="hex-bg">
      <h1 className="center-align skinny-font">Dashboard</h1>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red lighten-2">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
