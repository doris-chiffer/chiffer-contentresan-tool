import React, { Component } from 'react';
import './sass/App.scss';
import './sass/ContentresanPage.scss';

//components
import StartPage from './components/StartPage';
import ContentResanPage from './components/ContentresanPage';

class App extends Component {
  // if the user has entered their name they will be redirected to the second page
  //the state will change depending on if the user is "logged in" or not
  state = {
    loggedIn: false,
    projectName: '',
  };

  handleLogin = projectName => {
    this.setState({ loggedIn: true, projectName: projectName });
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="page-container">
          <ContentResanPage projectName={this.state.projectName} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <StartPage handleLogin={this.handleLogin} />
        </div>
      );
    }
  }
}

export default App;
