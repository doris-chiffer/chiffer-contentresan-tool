import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class ToolNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/">Chiffer Contentresan</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  LÄGG TILL STEG
                  <i className="material-icons vertical-align-middle padding-bottom-3">
                    add_circle_outline
                  </i>
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>
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
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">
                  SPARA
                  <i className="material-icons vertical-align-middle padding-bottom-3">
                    save
                  </i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  SKRIV UT
                  <i className="material-icons vertical-align-middle padding-bottom-3">
                    print
                  </i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  HJÄLP
                  <i className="material-icons vertical-align-middle padding-bottom-3">
                    help_outline
                  </i>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ToolNavbar;
