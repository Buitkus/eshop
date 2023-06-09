import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">About</Link>
           <Link to="/products" className="nav-link">Products</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  
  )
}

export default MyHeader