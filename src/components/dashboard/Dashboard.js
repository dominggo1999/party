import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="container">
        <div className="col-left">
          <ProjectList />
        </div>
        <div className="col-right">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
