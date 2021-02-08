import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

const Dashboard = (props) => {
  const { projects } = props;
  return (
    <div className="dashboard-wrapper">
      <div className="container">
        <div className="col-left">
          <ProjectList projects={projects} />
        </div>
        <div className="col-right">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
  ]),
)(Dashboard);
