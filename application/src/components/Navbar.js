import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
