import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
const NavBar = props => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React-Restaurant</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/">
          Welcome
        </NavItem>
        <NavItem eventKey={2} href="/menu">
          Menu
        </NavItem>
        <NavItem eventKey={3} href="/reservation">
          Reservations
        </NavItem>
        <NavItem eventKey={4} href="/location">
          Location
        </NavItem>
      </Nav>
    </Navbar>
  );
};

// <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//   <MenuItem eventKey={3.1}>Action</MenuItem>
//   <MenuItem eventKey={3.2}>Another action</MenuItem>
//   <MenuItem eventKey={3.3}>Something else here</MenuItem>
//   <MenuItem divider />
//   <MenuItem eventKey={3.4}>Separated link</MenuItem>
// </NavDropdown>
export default NavBar;
