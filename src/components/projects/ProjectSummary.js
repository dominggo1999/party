import React from 'react';
import { Link } from 'react-router-dom';
import convertSecondsToDate from '../../util';

const ProjectSummary = ({ project }) => {
  const {
    title, authorFirstname, authorLastname, createdId,
  } = project;

  return (
    <Link
      to={`project/${project.id}`}
      className="project-card"
    >
      <span className="project-title">{title}</span>
      <p className="posted-by">Posted by {authorFirstname} {authorLastname}</p>
      <p className="project-date">{convertSecondsToDate(createdId.seconds)}</p>
    </Link>
  );
};

export default ProjectSummary;
