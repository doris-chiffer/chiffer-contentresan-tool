import React from 'react';
import DisplayProjectName from './DisplayProjectName';
import Navbar from './Navbar';
import PostItNotes from './PostIt';
import ContentresanCircle from './ContentresanTool';

function ContentResanPage(props) {
  return (
    <div className="contentresan-container">
      <Navbar />
      <DisplayProjectName projectName={props.projectName} />
      <ContentresanCircle />
      {/* <PostItNotes /> */}
    </div>
  );
}

export default ContentResanPage;
