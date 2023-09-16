import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const NavbarComponent = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/gallery">GALLERY</Nav.Link>
              <Nav.Link href="/calendar">CALENDAR</Nav.Link>
              <NavDropdown title="MORE" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">PUBG CLAN LIST</NavDropdown.Item>
                <NavDropdown.Item href="/cart">
                  CART
                </NavDropdown.Item>
                <NavDropdown.Item href="/footer">
                  ABOUT US
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