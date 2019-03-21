import React, { Component } from 'react';
import Hjalpbild from '../images/contentresan-tutorial.jpg';
import { Button } from 'reactstrap';

class HjalpSida extends Component {
  render() {
    return (
      <div className="popup" ref={this.setWrapperRef}>
        <div className="popup-bar">
          <Button close onClick={this.props.closePopup} />
        </div>
        <div className="popup-container">
          <img src={Hjalpbild} alt="Hjälpsida" />
        </div>
      </div>
    );
  }
}

export default HjalpSida;
