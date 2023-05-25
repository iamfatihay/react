

import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

//!react-bootstrap MyNavbar component


const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          {" "}
          <img alt="" src={logo} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/" style={({isActive})=>({color:isActive && "red"})} >Home</NavLink>

            <NavLink className="nav-link" to="/teacher" style={({isActive})=>({backgroundColor:isActive && "red"})} >Teacher</NavLink>

            <NavLink className="nav-link" to="/courses" style={({isActive})=>({fontSize:isActive && "50px"})} >Courses</NavLink>

            <NavLink className="nav-link" to="/contact" style={({isActive})=>({border:isActive ? "2px solid red" : "1px solid blue"})} >Contact</NavLink>

            <a
              href="https://github.com/clarusway/clarusway-FS-DE-04-TR"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
