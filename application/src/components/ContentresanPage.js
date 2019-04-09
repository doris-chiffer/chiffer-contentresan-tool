import React, { Component } from 'react';
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
import HjalpSida from './TutorialPage';
import DisplayProjectName from './DisplayProjectName';
import chifferLogo from '../images/logo_contentresan_vit_liten.png';

class ContentResanPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      showPopup: false,
    };

    this.saveAsPdf = this.saveAsPdf.bind(this);
  }

  saveAsPdf = event => {
    event.preventDefault();
    const input = document.getElementById('div-to-pdf');
    html2canvas(input).then(canvas => {
      const largerScreen = window.matchMedia('(min-width:2600px)');

      const imgData = canvas.toDataURL('image/png', 1.0); //image format
      const pdf = new jsPDF('landscape', 'mm', 'a4'); // landscape size page of PDF
      //  const width = pdf.internal.pageSize.getWidth();
      //  const height = pdf.internal.pageSize.getHeight();

      if (largerScreen.matches) {
        pdf.addImage(imgData, 'PNG', -100, 10, 500, 200); // image, format, x-axis, y-axis, width, height
      } else if (window.matchMedia('(min-width:2000px)').matches) {
        pdf.addImage(imgData, 'PNG', 0, 10, 300, 200); // image, format, x-axis, y-axis, width, height
      } else if (window.matchMedia('(min-width:1024px)').matches) {
        pdf.addImage(imgData, 'PNG', 50, 10, 190, 200); // image, format, x-axis, y-axis, width, height
      } else {
        // image, format, x-axis, y-axis, width, height
        pdf.addImage(imgData, 'PNG', 60, 10, 150, 200);
      }

      pdf.save(`${this.props.projectName}.pdf`);
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div className="contentresan-container">
        <div className="navbar-container">
          <Navbar light expand="md">
            <NavbarBrand>
              <img
                src={chifferLogo}
                className="chiffer-logo-black"
                alt="chiffer-logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem onClick={this.saveAsPdf}>
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
                <NavItem onClick={this.togglePopup.bind(this)}>
                  <NavLink>
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
        <footer id="footer">©Chiffer</footer>
        {this.state.showPopup ? (
          <HjalpSida closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default ContentResanPage;
