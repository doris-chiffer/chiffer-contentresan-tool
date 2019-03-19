import React, { Component } from 'react';
import DisplayProjectName from './DisplayProjectName';
// import Navbar from './Navbar';
import PostItNotes from './PostIt';
import ContentresanCircle from './ContentresanTool';
import ReactToPrint from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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

    this.printDocument = this.printDocument.bind(this);
  }

  printDocument = event => {
    event.preventDefault();
    const input = document.getElementById('divToPrint');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      pdf.save(`${this.props.projectName}.pdf`);
    });
  };

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
                <NavItem onClick={this.printDocument}>
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
