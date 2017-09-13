import React from 'react';
import { Link } from 'react-router-dom';
require('../css/main.css');

const Dashboard = () => {
  return (
    <div>
      <h1 className="center-align">Dashboard</h1>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red lighten-2">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
