import React, { Component } from 'react';
import DisplayProjectName from './DisplayProjectName';
// import Navbar from './Navbar';
import PostItNotes from './PostIt';
import ContentresanCircle from './ContentresanTool';
import ReactToPrint from 'react-to-print';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

// import * as jsPDF from 'jspdf'

class ContentResanPage extends Component {
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
      <div className="contentresan-container">
        <div className="navbar-container">
          <Navbar light expand="md">
            <NavbarBrand href="/">Chiffer Contentresan</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    SPARA
                    <i className="material-icons vertical-align-middle padding-bottom-3">
                      save
                    </i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <ReactToPrint
                    trigger={() => (
                      <NavLink>
                        SKRIV UT
                        <i className="material-icons vertical-align-middle padding-bottom-3">
                          print
                        </i>
                      </NavLink>
                    )}
                    content={() => this.componentRef}
                  />
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
        <DisplayProjectName
          projectName={this.props.projectName}
          ref={el => (this.componentRef = el)}
        />
        <div className="clear" />
        <footer id="footer">©Chiffer</footer>
      </div>
    );
  }
}

export default ContentResanPage;
