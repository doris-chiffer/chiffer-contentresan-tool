import React, { Component } from 'react';
// import {
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';

class DropdownBar extends Component {
  render() {
    return (
      <div>
        <ul className="circle-container">
          <li>
            <img src="http://lorempixel.com/100/100/city" alt="exempel" />
          </li>
          <li>
            <img src="http://lorempixel.com/100/100/nature" alt="exempel" />
          </li>
          <li>
            <img src="http://lorempixel.com/100/100/abstract" alt="exempel" />
          </li>
          <li>
            <img src="http://lorempixel.com/100/100/cats" alt="exempel" />
          </li>
          <li>
            <img src="http://lorempixel.com/100/100/food" alt="exempel" />
          </li>
          <li>
            <img src="http://lorempixel.com/100/100/animals" alt="exempel" />
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
