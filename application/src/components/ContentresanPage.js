import React from 'react';
import DisplayProjectName from './DisplayProjectName';
import Navbar from './Navbar';
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
          {/* <PostItNotes /> */}
        </div>
      </div>
    </div>
  );
}

export default ContentResanPage;
