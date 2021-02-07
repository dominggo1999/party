import React from 'react';
import ProjectSummary from './ProjectSummary';

const a = [1, 2, 3];

const ProjectList = () => {
  return (
    <div>
      {a.map((e) => <ProjectSummary />)}
    </div>
  );
};

export default ProjectList;
