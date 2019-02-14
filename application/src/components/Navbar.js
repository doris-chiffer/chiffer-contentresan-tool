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
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>Introduktion</DropdownItem>
                  <DropdownItem>Utvärdering</DropdownItem>
                  <DropdownItem>Köp</DropdownItem>
                  <DropdownItem>Efterköp</DropdownItem>
                  <DropdownItem>Lojaliterts lopp</DropdownItem>
                  <DropdownItem>Trigger</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">SPARA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">SKRIV UT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">HJÄLP</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ToolNavbar;
