import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ProjectName extends Component {
  // set the two states for the project name and the error message
  state = {
    projectName: '',
    error: '',
  };

  // get the value from the input
  handleChange = event => {
    this.setState({ projectName: event.target.value });
  };

  submitName = event => {
    event.preventDefault();

    if (this.state.projectName === '') {
      this.setState({ error: 'Vad snäll och skriv ett namn' });
    } else {
      //   this.props.handleLogin(this.state.projectName);
      console.log('project:', this.state.projectName);
    }
  };

  render() {
    //if its in an error state then display the error message
    // make the errorMessage variable empty so it can change to the message
    let errorMessage = null;
    if (this.state.error) {
      errorMessage = <p>{this.state.error}</p>;
    }
    return (
      //the form

      <div className="player-form">
        <form onSubmit={this.submitName}>
          <div className="form-group">
            <label htmlFor="enterPlayerName">Project name:</label>

            <input
              type="text"
              className="form-control"
              id="enter-project-name"
              placeholder="Enter your name"
              value={this.state.value}
              onChange={this.handleChange}
            />

            <Button className="start-button" type="submit" value="Start">
              Start{' '}
            </Button>
          </div>
          <p className="text-danger">{errorMessage}</p>
        </form>
      </div>
    );
  }
}

export default ProjectName;
