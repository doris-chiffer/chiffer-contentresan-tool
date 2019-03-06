import React, { Component } from 'react';

class PostIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introduktion: 'Skriv introduktion',
      utvardering: 'Skriv utvärdering',
      kop: 'Skriv köp',
      trigger: 'Skriv en trigger',
      editIntroduktion: false,
      editTrigger: false,
    };

    this.editTriggerHandler = this.editTriggerHandler.bind(this);
    this.editIntroduktionHandler = this.editIntroduktionHandler.bind(this);
    this.saveIntroduktionHandler = this.saveIntroduktionHandler.bind(this);
    // this.saveTriggerHandler = this.saveTriggerHandler.bind(this);
    this.deleteTrigger = this.deleteTrigger.bind(this);
    this.deleteIntroduktion = this.deleteIntroduktion.bind(this);
  }

  //introduktion functions
  deleteIntroduktion() {
    this.setState({
      introduktion: 'Skriv introduktion',
    });
  }

  // trigger functions
  deleteTrigger() {
    this.setState({
      trigger: 'Skriv en trigger',
    });
  }

  /*makes the text editable*/
  editTriggerHandler() {
    this.setState({
      editTrigger: true,
    });
  }

  editIntroduktionHandler() {
    this.setState({
      editIntroduktion: true,
    });
  }
  /* saves the text*/
  saveIntroduktionHandler() {
    this.setState({
      introduktion: this.refs.newIntro.value,
      editIntroduktion: false,
    });
  }

  // saveTriggerHandler() {
  //   this.setState({
  //     trigger: this.refs.newTrigger.value,
  //     editTrigger: false,
  //   });
  // }

  // render() {
  //   return (
  //     <div>
  //       <div className="green-postit postit">
  //         <p>{this.state.introduktion}</p>

  //         <div className="note-buttons">
  //           <button onClick={this.editIntroduktionHandler}>
  //             <i className="far fa-edit" />
  //           </button>
  //           <button onClick={this.deleteIntroduktion}>
  //             <i className="far fa-trash-alt" />
  //           </button>
  //         </div>
  //       </div>

  //       <div className="blue-postit postit">
  //         <p>{this.state.kop}</p>

  //         <div className="note-buttons">
  //           <button onClick={this.editIntroduktionHandler}>
  //             <i className="far fa-edit" />
  //           </button>
  //           <button onClick={this.deleteIntroduktion}>
  //             <i className="far fa-trash-alt" />
  //           </button>
  //         </div>
  //       </div>

  //       <div className="orange-postit postit">
  //         <p>{this.state.introduktion}</p>

  //         <div className="note-buttons">
  //           <button onClick={this.editIntroduktionHandler}>
  //             <i className="far fa-edit" />
  //           </button>
  //           <button onClick={this.deleteIntroduktion}>
  //             <i className="far fa-trash-alt" />
  //           </button>
  //         </div>
  //       </div>

  //       <div className="darkblue-postit postit">
  //         <p>{this.state.introduktion}</p>

  //         <div className="note-buttons">
  //           <button onClick={this.editIntroduktionHandler}>
  //             <i className="far fa-edit" />
  //           </button>
  //           <button onClick={this.deleteIntroduktion}>
  //             <i className="far fa-trash-alt" />
  //           </button>
  //         </div>
  //       </div>

  //       <div className="yellow-postit postit">
  //         <p>{this.state.introduktion}</p>

  //         <div className="note-buttons">
  //           <button onClick={this.editIntroduktionHandler}>
  //             <i className="far fa-edit" />
  //           </button>
  //           <button onClick={this.deleteIntroduktion}>
  //             <i className="far fa-trash-alt" />
  //           </button>
  //         </div>
  //       </div>

  //       <div className="trigger-postit postit">
  //         <p>{this.state.trigger}</p>
  //         <div className="note-buttons">
  //           <button onClick={this.editTriggerHandler}>
  //             <i className="far fa-edit" />
  //           </button>
  //           <button onClick={this.deleteTrigger}>
  //             <i className="far fa-trash-alt" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default PostIt;
