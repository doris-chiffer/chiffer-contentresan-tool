import React, { Component } from 'react';

class PostIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trigger: 'Skriv en Trigger',
      edit: false,
    };

    this.editHandler = this.editHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    // this.handleTrigger = this.handleTrigger.bind(this);
    this.deleteTrigger = this.deleteTrigger.bind(this);
  }

  deleteTrigger() {
    this.setState({
      trigger: 'Skriv Trigger',
    });
  }

  // // get the value from the text area
  // handleTrigger  (event) {
  //   this.setState({  trigger: event.target.value });
  // };

  // makes the text editable
  editHandler() {
    // event.preventDefault();

    this.setState({
      edit: true,
    });
  }

  // saves the text
  saveHandler() {
    // event.preventDefault();
    this.setState({
      trigger: this.ref.newText.value,
      edit: false,
    });
  }

  // render() {
  //   if (this.state.edit=== true) {

  //     return (
  //       <div className="trigger-postit postit">

  //      <textarea
  //       defaultValue={this.state.trigger}
  //       refs="newText"
  //       onChange={this.handleTrigger}
  //       />

  //         <button onClick={this.saveHandler}>
  //         <i className="far fa-save"/>
  //         </button>
  //       </div>

  //     );
  //   } else {
  //   return (

  //       <div className="trigger-postit postit">
  //         <p>{this.state.trigger}</p>

  //         <button onClick={this.editHandler}>
  //         <i className="far fa-edit"/>
  //         </button>
  //         <button onClick={this.deleteTrigger} >
  //         <i className="far fa-trash-alt"/>
  //         </button>
  //       </div>

  //   );
  // }

  //}

  noteFinished() {
    return (
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
    );
  }

  noteEdit() {
    return (
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
