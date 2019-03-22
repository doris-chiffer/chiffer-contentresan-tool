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
            <img
              src={StegEtt}
              alt="Steg ett"
              data-toggle="tooltip"
              data-placement="top"
              title="Steg 1- Introduktion"
            />
            <div className="green-postit postit">
              <textarea
                placeholder="Skriv introduktion..."
                value={this.state.introduktion}
                onChange={this.handleChangeIntro}
              />
              <span>
                <button onClick={this.deleteIntro}>
                  <i className="far fa-trash-alt" />
                </button>
              </span>
            </div>
          </li>

          <li className="circle-items steg-tva">
            <img
              src={StegTva}
              alt="Steg två"
              data-toggle="tooltip"
              data-placement="top"
              title="Steg 2- Utvärdering"
            />

            <div className="blue-postit postit">
              <textarea
                placeholder="Skriv utvärdering..."
                value={this.state.utvardering}
                onChange={this.handleChangeUtvardering}
              />

              <span>
                <button onClick={this.deleteUtvardering}>
                  <i className="far fa-trash-alt" />
                </button>
              </span>
            </div>
          </li>
          <li className="circle-item steg-tre">
            <img
              src={StegTre}
              alt="Steg tre"
              data-toggle="tooltip"
              data-placement="top"
              title="Steg 3- Köp"
            />

            <div className="orange-postit postit">
              <textarea
                placeholder="Skriv köp..."
                value={this.state.kop}
                onChange={this.handleChangeKop}
              />

              <span>
                <button onClick={this.deleteKop}>
                  <i className="far fa-trash-alt" />
                </button>
              </span>
            </div>
          </li>
          <li className="circle-item steg-fyra">
            <img
              src={StegFyra}
              alt="Steg fyra"
              data-toggle="tooltip"
              data-placement="top"
              title="Steg 4- Efter köp"
            />

            <div className="yellow-postit postit">
              <textarea
                placeholder="Skriv efter köp..."
                value={this.state.efterKop}
                onChange={this.handleChangeEfterKop}
              />

              <span>
                <button onClick={this.deleteEfterKop}>
                  <i className="far fa-trash-alt" />
                </button>
              </span>
            </div>
          </li>
          <li className="circle-item steg-fem">
            <img
              src={StegFem}
              alt="Steg fem"
              data-toggle="tooltip"
              data-placement="top"
              title="Steg 5- Lojalitets loop"
            />

            <div className="darkblue-postit postit">
              <textarea
                placeholder="Skriv lojalitets lopp..."
                value={this.state.lojalitetsLoop}
                onChange={this.handleChangeLojalitetsloop}
              />
              <span>
                <button onClick={this.deleteLojalitetsLoop}>
                  <i className="far fa-trash-alt" />
                </button>
              </span>
            </div>
          </li>
          <li className="circle-item steg-trigger">
            <img
              src={TriggerIcon}
              alt="Trigger"
              data-toggle="tooltip"
              data-placement="top"
              title="Trigger"
            />

            <div className="trigger-postit postit">
              <textarea
                placeholder="Skriv en trigger..."
                value={this.state.trigger}
                onChange={this.handleChangeTrigger}
              />

              <span>
                <button onClick={this.deleteTrigger}>
                  <i className="far fa-trash-alt" />
                </button>
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContentresanTool;
