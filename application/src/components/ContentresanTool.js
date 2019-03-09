import React, { Component } from 'react';
// import {
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';
import TriggerIcon from '../images/nummersteg/trigger_icon.png';
import StegEtt from '../images/nummersteg/steg-1.png';
import StegTva from '../images/nummersteg/steg-2.png';
import StegTre from '../images/nummersteg/steg-3.png';
import StegFyra from '../images/nummersteg/steg-4.png';
import StegFem from '../images/nummersteg/steg-5.png';
class DropdownBar extends Component {
  render() {
    return (
      <div className="contentresan-tool">
        <ul className="circle-container">
          <li className="circle-items steg-ett">
            <img src={StegEtt} alt="exempel" />
            <div className="green-postit postit">
              <p>intro</p>

              <div className="note-buttons">
                <button>
                  <i className="far fa-edit" />
                </button>
                <button>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>

          <li className="circle-items steg-tva">
            <img src={StegTva} alt="exempel" />

            <div className="blue-postit postit">
              <p>intro</p>

              <div className="note-buttons">
                <button>
                  <i className="far fa-edit" />
                </button>
                <button>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
          <li className="circle-item steg-tre">
            <img src={StegTre} alt="exempel" />

            <div className="orange-postit postit">
              <p>kf</p>

              <div className="note-buttons">
                <button>
                  <i className="far fa-edit" />
                </button>
                <button>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
          <li className="circle-item steg-fyra">
            <img src={StegFyra} alt="exempel" />

            <div className="yellow-postit postit">
              <p>kf</p>

              <div className="note-buttons">
                <button>
                  <i className="far fa-edit" />
                </button>
                <button>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
          <li className="circle-item steg-fem">
            <img src={StegFem} alt="exempel" />

            <div className="darkblue-postit postit">
              <p>kf</p>

              <div className="note-buttons">
                <button>
                  <i className="far fa-edit" />
                </button>
                <button>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </div>
          </li>
          <li className="circle-item steg-trigger">
            <img src={TriggerIcon} alt="Trigger" />

            <div className="trigger-postit postit">
              <p>kf</p>

              <div className="note-buttons">
                <button>
                  <i className="far fa-edit" />
                </button>
                <button>
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

export default DropdownBar;
