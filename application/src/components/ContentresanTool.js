import React, { Component } from 'react';

import TriggerIcon from '../images/nummersteg/trigger_icon.png';
import StegEtt from '../images/nummersteg/steg-1.png';
import StegTva from '../images/nummersteg/steg-2.png';
import StegTre from '../images/nummersteg/steg-3.png';
import StegFyra from '../images/nummersteg/steg-4.png';
import StegFem from '../images/nummersteg/steg-5.png';
class ContentresanTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introduktion: '',
      utvardering: '',
      kop: '',
      efterKop: '',
      trigger: '',
      lojalitetsLoop: '',
    };
  }

  //handlechange

  // get the value from the  textfield
  handleChangeIntro = event => {
    event.preventDefault();
    this.setState({ introduktion: event.target.value });
  };

  handleChangeUtvardering = event => {
    event.preventDefault();
    this.setState({ utvardering: event.target.value });
  };

  handleChangeKop = event => {
    event.preventDefault();
    this.setState({ kop: event.target.value });
  };

  handleChangeEfterKop = event => {
    event.preventDefault();
    this.setState({ efterKop: event.target.value });
  };

  handleChangeLojalitetsloop = event => {
    event.preventDefault();
    this.setState({ lojalitetsLoop: event.target.value });
  };

  handleChangeTrigger = event => {
    event.preventDefault();
    this.setState({ trigger: event.target.value });
  };

  //delete functions
  deleteIntro = event => {
    event.preventDefault();
    this.setState({
      introduktion: '',
    });
  };

  deleteUtvardering = event => {
    event.preventDefault();
    this.setState({
      utvardering: '',
    });
  };

  deleteKop = event => {
    event.preventDefault();
    this.setState({
      kop: '',
    });
  };

  deleteEfterKop = event => {
    event.preventDefault();
    this.setState({
      efterKop: '',
    });
  };

  deleteTrigger = event => {
    event.preventDefault();
    this.setState({
      trigger: '',
    });
  };

  deleteLojalitetsLoop = event => {
    event.preventDefault();
    this.setState({
      lojalitetsLoop: '',
    });
  };

  render() {
    return (
      <div className="contentresan-tool">
        <ul className="circle-container">
          <li className="circle-items steg-ett">
            <img src={StegEtt} alt="exempel" />
            <div className="green-postit postit">
              <textarea
                placeholder="Skriv introduktion..."
                value={this.state.introduktion}
                onChange={this.handleChangeIntro}
              />
              <div className="note-buttons">
                <button onClick={this.deleteIntro}>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>

          <li className="circle-items steg-tva">
            <img src={StegTva} alt="exempel" />

            <div className="blue-postit postit">
              <textarea
                placeholder="Skriv utvärdering..."
                value={this.state.utvardering}
                onChange={this.handleChangeUtvardering}
              />

              <div className="note-buttons">
                <button onClick={this.deleteUtvardering}>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
          <li className="circle-item steg-tre">
            <img src={StegTre} alt="exempel" />

            <div className="orange-postit postit">
              <textarea
                placeholder="Skriv köp..."
                value={this.state.kop}
                onChange={this.handleChangeKop}
              />

              <div className="note-buttons">
                <button onClick={this.deleteKop}>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
          <li className="circle-item steg-fyra">
            <img src={StegFyra} alt="exempel" />

            <div className="yellow-postit postit">
              <textarea
                placeholder="Skriv efter köp..."
                value={this.state.efterKop}
                onChange={this.handleChangeEfterKop}
              />

              <div className="note-buttons">
                <button onClick={this.deleteEfterKop}>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
          <li className="circle-item steg-fem">
            <img src={StegFem} alt="exempel" />

            <div className="darkblue-postit postit">
              <textarea
                placeholder="Skriv lojalitets lopp..."
                value={this.state.lojalitetsLoop}
                onChange={this.handleChangeLojalitetsloop}
              />
              <div className="note-buttons">
                <button onClick={this.deleteLojalitetsLoop}>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
          <li className="circle-item steg-trigger">
            <img src={TriggerIcon} alt="Trigger" />

            <div className="trigger-postit postit">
              <textarea
                placeholder="Skriv en trigger..."
                value={this.state.trigger}
                onChange={this.handleChangeTrigger}
              />

              <div className="note-buttons">
                <button onClick={this.deleteTrigger}>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContentresanTool;
