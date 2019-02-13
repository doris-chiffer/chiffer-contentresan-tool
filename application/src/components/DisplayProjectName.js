import React from 'react';

//this will display the project's name
//gets the name from ProjectNameInput.js by props
function ProjectName(props) {
  return (
    <div className="project-container">
      <h2>Contentresan: {props.projectName}!</h2>
    </div>
  );
}

export default ProjectName;
