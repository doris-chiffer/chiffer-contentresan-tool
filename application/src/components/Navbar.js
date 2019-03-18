// import React, { Component,useRef  } from 'react';
// import ReactToPrint from "react-to-print";
// import ContentresanCircle from './ContentresanTool';

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';

// class ToolNavbar extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }

//   render() {

//     return (
//       <div className="navbar-container">
//         <Navbar light expand="md">
//           <NavbarBrand href="/">Chiffer Contentresan</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink>
//                   SPARA
//                   <i className="material-icons vertical-align-middle padding-bottom-3">
//                     save
//                   </i>
//                 </NavLink>

//               </NavItem>
//               <NavItem>
//               <ReactToPrint
//               trigger={() => <NavLink>
//                   SKRIV UT
//                   <i className="material-icons vertical-align-middle padding-bottom-3">
//                     print
//                   </i>
//                 </NavLink>}
//                 content={() => this.componentRef}
//                 />
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/">
//                   HJÄLP
//                   <i className="material-icons vertical-align-middle padding-bottom-3">
//                     help_outline
//                   </i>
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default ToolNavbar;
