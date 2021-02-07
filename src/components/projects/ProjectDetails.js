import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="dashboard-wrapper">
      <div className="container">
        <div className="project-card project-detail">
          <span className="project-title big">Project title {id}</span>
          <p className="project-content ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quidem quisquam eius veniam iusto unde odit non temporibus, voluptatum nesciunt laudantium deleniti debitis rem, fugit aperiam animi alias earum quo? Dolor nostrum aut earum voluptas quas? Impedit laudantium doloremque fugit vitae esse nemo. Reprehenderit odit officiis eligendi quidem tenetur quas et, vitae libero quisquam repellat quo, explicabo natus. Sequi odit, quibusdam quos eius saepe sed at iure perspiciatis, quae facilis repellendus, deleniti ut et doloremque minima natus accusantium reprehenderit porro vitae molestiae! In unde expedita pariatur natus eos praesentium ducimus blanditiis aliquam nostrum, repudiandae, mollitia autem tempore necessitatibus reiciendis?</p>
          <p className="posted-by">Posted by Arnold</p>
          <p className="project-date">1st January , 2022</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
