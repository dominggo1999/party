import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import convertSecondsToDate from '../../util';

const ProjectDetails = ({ project }) => {
  if (project) {
    const {
      title, authorFirstname, authorLastname, content, createdId,
    } = project;

    return (
      <div className="dashboard-wrapper">
        <div className="container">
          <div className="project-card project-detail">
            <span className="project-title big">{title}</span>
            <p className="project-content ">{content}</p>
            <p className="posted-by">Posted by {authorFirstname} {authorLastname}</p>
            <p className="project-date">{convertSecondsToDate(createdId.seconds)}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="loading">loading...</div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
  ]),
)(ProjectDetails);
