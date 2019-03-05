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
      <div>
        <ul className="circle-container">
          <li className="circle-items steg-ett">
            <img src={StegEtt} alt="exempel" />
          </li>
          <li className="circle-items steg-tva">
            <img src={StegTva} alt="exempel" />
          </li>
          <li className="circle-item steg-tre">
            <img src={StegTre} alt="exempel" />
          </li>
          <li className="circle-item steg-fyra">
            <img src={StegFyra} alt="exempel" />
          </li>
          <li className="circle-item steg-fem">
            <img src={StegFem} alt="exempel" />
          </li>
          <li className="circle-item steg-trigger">
            <img src={TriggerIcon} alt="Trigger" />
          </li>
        </ul>

        {/* <DropdownToggle nav caret>
                  LÄGG TILL STEG
                  <i className="material-icons vertical-align-middle padding-bottom-3">
                    add_circle_outline
                  </i>
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem onClick={this.toggle.bind(this)}>
                    <span className="fa-stack fa-1x">
                      <i className="far fa-circle fa-stack-2x" />
                      <span className="fa fa-stack-1x">1</span>
                    </span>
                    Introduktion                   
                  </DropdownItem>
                  <DropdownItem>
                    <span className="fa-stack fa-1x">
                      <i className="far fa-circle fa-stack-2x" />
                      <span className="fa fa-stack-1x">2</span>
                    </span>
                    Utvärdering
                  </DropdownItem>
                  <DropdownItem>
                    <span className="fa-stack fa-1x">
                      <i className="far fa-circle fa-stack-2x" />
                      <span className="fa fa-stack-1x">3</span>
                    </span>
                    Köp
                  </DropdownItem>
                  <DropdownItem>
                    <span className="fa-stack fa-1x">
                      <i className="far fa-circle fa-stack-2x" />
                      <span className="fa fa-stack-1x">4</span>
                    </span>
                    Efterköp
                  </DropdownItem>
                  <DropdownItem>
                    <span className="fa-stack fa-1x">
                      <i className="far fa-circle fa-stack-2x" />
                      <span className="fa fa-stack-1x">5</span>
                    </span>
                    Lojalitets lopp
                  </DropdownItem>
                  <DropdownItem>
                    <span className="fa-stack fa-1x">
                      <i className="far fa-circle fa-stack-2x" />
                      <span className="fa fa-stack-1x">6</span>
                    </span>
                    Trigger
                  </DropdownItem>
                </DropdownMenu>
           */}
      </div>
    );
  }
}

export default DropdownBar;
