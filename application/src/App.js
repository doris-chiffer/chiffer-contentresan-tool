import React, { Component } from 'react';
import './sass/App.scss';
import './sass/ContentresanPage.scss';
import './sass/ContentresanCircle.scss';
import loadingSpinner from './images/loading-spinner.gif';

//components
import StartPage from './components/StartPage';
import ContentResanPage from './components/ContentresanPage';

class App extends Component {
  // if the user has entered their name they will be redirected to the second page
  //the state will change depending on if the user is "logged in" or not
  state = {
    loggedIn: false,
    projectName: '',
    loading: 'initial',
    data: '',
  };

  loadData() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log('wait 1 second');
        resolve('This is the data.');
      }, 1000);
    });
    return promise;
  }
  componentDidMount() {
    this.setState({ loading: 'true' });
    this.loadData().then(data => {
      this.setState({
        data: data,
        loading: 'false',
      });
    });
  }
  handleLogin = projectName => {
    this.setState({ loggedIn: true, projectName: projectName });
  };

  render() {
    /*This happens after the class is constructed. You will not 
    see this element because React is still computing changes to the DOM.*/

    if (this.state.loading === 'initial') {
      return (
        <div className="loading-page">
          <div className="loading-spinner">
            <img src={loadingSpinner} alt="Loading.." />
          </div>
        </div>
      );
    }

    //This happens when we wait for data.
    if (this.state.loading === 'true') {
      return (
        <div className="loading-page">
          <div className="loading-spinner">
            <img src={loadingSpinner} alt="Loading.." />
          </div>
        </div>
      );
    }

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
