import React, { Component } from 'react';

class PostIt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editIntroduktion: false,
      editTrigger: false,
    };

    this.editTriggerHandler = this.editTriggerHandler.bind(this);
    this.editIntroduktionHandler = this.editIntroduktionHandler.bind(this);
    this.saveIntroduktionHandler = this.saveIntroduktionHandler.bind(this);
    // this.saveTriggerHandler = this.saveTriggerHandler.bind(this);
  }
  //introduktion functions

  // trigger functions

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
}

export default PostIt;
