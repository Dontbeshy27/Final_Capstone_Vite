import React from "react";
import { Link } from 'react-router-dom'; 
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { ShoppingCart } from "phosphor-react";
import { Shop } from "react-bootstrap-icons";
const NavbarComponent = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="/home">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/gallery">GALLERY</Nav.Link>
              <Nav.Link href="/calendar">CALENDAR</Nav.Link>
              <NavDropdown title="MORE" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">PUBG CLAN LIST</NavDropdown.Item>
                
                <NavDropdown.Item href="/pages/about_us">About Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {isAuthenticated && (
            <Navbar.Collapse className="justify-content-end">
              <Nav>
              
              <Link to="pages/shop/shop "><Shop size={32} /></Link>
              <Link to="/pages/cart/cart"><ShoppingCart size={32} /></Link>
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