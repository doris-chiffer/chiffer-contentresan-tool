
import React, { Component } from 'react';

//images
import chifferLogo from '../images/Contentresan_logo.svg';

class StartPage extends Component {
    render() {
      return (
        <div className="start-page">
          <header className="App-header">
            <img src={chifferLogo} className="chiffer-logo-black" alt="chiffer-logo" />
           
            
          </header>
        </div>
      );
    }
  }
  
  export default StartPage;
  