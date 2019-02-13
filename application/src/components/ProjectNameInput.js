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
      this.setState({ error: 'Vad snäll och skriv ett projektnamn' });
    } else {
      //   this.props.handleLogin(this.state.projectName);
      console.log('project:', this.state.projectName);
    }
  };

  render() {
    //if its in an error state then display the error message
    // make the errorMessage variable empty so it can change to the message
    let errorMessage = null;
    let errorIcon = null;
    if (this.state.error) {
      errorMessage = this.state.error;
      errorIcon = (
        <span>
          <i className="fas fa-exclamation-triangle" />
        </span>
      );
    }
    return (
      //the form

      <div className="player-form">
        <form onSubmit={this.submitName}>
          <div className="form-group">
            <label htmlFor="enterPlayerName">Skriv projektets namn:</label>

            <input
              type="text"
              className="form-control"
              id="enter-project-name"
              placeholder="Projektnamn..."
              value={this.state.value}
              onChange={this.handleChange}
            />

            <Button className="start-button" type="submit" value="Start">
              Gå vidare
              <span className="button-arrow">
                <i className="far fa-arrow-alt-circle-right" />
              </span>
            </Button>
          </div>
          <p className="text-danger">
            {errorMessage} {errorIcon}
          </p>
        </form>
      </div>
    );
  }
}

export default ProjectName;
