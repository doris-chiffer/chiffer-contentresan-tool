import React, { Component } from 'react';
import './sass/App.scss';

//components
import StartPage from './components/StartPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StartPage />
      </div>
    );
  }
}

export default App;
