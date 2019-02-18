import React from 'react';
import DisplayProjectName from './DisplayProjectName';
import Navbar from './Navbar';
import ContentresanImage from '../images/contentresa.png';

function ContentResanPage(props) {
  return (
    <div>
      <Navbar />
      <div className="contentresan-container">
        <DisplayProjectName projectName={props.projectName} />
        <div className="contentresan-tool">
          <img src={ContentresanImage} alt="Contentresan" />
        </div>
      </div>
    </div>
  );
}

export default ContentResanPage;
