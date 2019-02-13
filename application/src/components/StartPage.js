import React from 'react';
//components
import ProjectNameInput from './ProjectNameInput';

//images
import chifferLogo from '../images/Contentresan_logo.svg';

function StartPage(props) {
  return (
    <div className="start-page">
      <header className="App-header">
        <img
          src={chifferLogo}
          className="chiffer-logo-black"
          alt="chiffer-logo"
        />
        <div className="form-container">
          <ProjectNameInput handleLogin={props.handleLogin} />
        </div>
      </header>
    </div>
  );
}

export default StartPage;
