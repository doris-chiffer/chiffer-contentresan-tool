import React from 'react';
import DisplayProjectName from './DisplayProjectName';
import Navbar from './Navbar';
import ContentresanImage from '../images/contentresa.png';
import PostItNotes from './PostIt';
import ContentresanCircle from './ContentresanTool';

function ContentResanPage(props) {
  return (
    <div>
      <Navbar />
      <div className="contentresan-container">
        <DisplayProjectName projectName={props.projectName} />
        <div className="contentresan-tool">
          <ContentresanCircle />
        </div>
      </div>
    </div>
  );
}

export default ContentResanPage;
