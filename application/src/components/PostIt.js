import React, { Component } from 'react';

class PostIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introduktion: 'Skriv Introduktion',
      utvardering: 'Skriv utvardering',
      kop: 'Skriv kop',
      trigger: 'Skriv en Trigger',
      edit: false,
    };

    this.editHandler = this.editHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.deleteTrigger = this.deleteTrigger.bind(this);
    this.deleteIntroduktion = this.deleteIntroduktion.bind(this);
  }

  //introduktion functions
  deleteIntroduktion() {
    //event.preventDefault();
    this.setState({
      introduktion: '',
    });
  }

  // trigger functions
  deleteTrigger() {
    //event.preventDefault();
    this.setState({
      trigger: '',
    });
  }

  // makes the text editable
  editHandler() {
    //event.preventDefault();

    this.setState({
      edit: true,
    });
  }

  // saves the text
  saveHandler() {
    this.setState({
      trigger: this.refs.newText.value,
      edit: false,
    });
  }

  noteFinished() {
    return (
      <div>
        <div className="green-postit postit">
          <p>{this.state.introduktion}</p>
          <div className="note-buttons">
            <button onClick={this.editHandler}>
              <i className="far fa-edit" />
            </button>
            <button onClick={this.deleteIntroduktion}>
              <i className="far fa-trash-alt" />
            </button>
          </div>
        </div>

        <div className="trigger-postit postit">
          <p>{this.state.trigger}</p>
          <div className="note-buttons">
            <button onClick={this.editHandler}>
              <i className="far fa-edit" />
            </button>
            <button onClick={this.deleteTrigger}>
              <i className="far fa-trash-alt" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  noteEdit() {
    return (
      <div>
        <div className="green-postit postit">
          <textarea
            defaultValue={this.state.introduktion}
            ref="newText"
            placeholder="Skriv en Introduktion"
          />
          <button onClick={this.saveHandler}>
            SPARA
            <i className="far fa-save" />
          </button>
        </div>

        <div className="trigger-postit postit">
          <textarea
            defaultValue={this.state.trigger}
            ref="newText"
            placeholder="Skriv en Trigger"
          />
          <button onClick={this.saveHandler}>
            SPARA
            <i className="far fa-save" />
          </button>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.edit) {
      return this.noteEdit();
    } else {
      return this.noteFinished();
    }
  }
}

export default PostIt;
