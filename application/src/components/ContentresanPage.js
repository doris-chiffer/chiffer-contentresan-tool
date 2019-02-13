import React from 'react';
import DisplayProjectName from './DisplayProjectName';
import Navbar from './Navbar';

function ContentResanPage(props) {
  return (
    <div>
      <Navbar />
      <DisplayProjectName projectName={props.projectName} />
    </div>
  );
}

export default ContentResanPage;
