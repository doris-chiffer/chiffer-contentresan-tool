import React, { Component } from 'react';
import ContentresanCircle from './ContentresanTool';

//this will display the project's name
//gets the name from ProjectNameInput.js by props
class ProjectName extends Component {
  render() {
    return (
      <div id="div-to-pdf">
        <div className="project-container">
          <h1>Contentresan: {this.props.projectName}</h1>
        </div>
        <ContentresanCircle />
        <div className="clear" />
      </div>
    );
  }
}

export default ProjectName;
