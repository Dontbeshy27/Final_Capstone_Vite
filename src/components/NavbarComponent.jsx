import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const NavbarComponent = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">ALL PUBG CLAN DETAILS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="index2.html">index</Nav.Link>
              <Nav.Link href="index2.html">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {isAuthenticated && (
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link href="/logout2">Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
