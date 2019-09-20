import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import SearchBar from '../SearchBar';
import Cart from '../Cart';
import './NavBar.scss';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-uppercase text-danger">shopmate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-light ml-3">Women</Nav.Link>
            <Nav.Link href="/" className="text-light ml-3">Men</Nav.Link>
            <Nav.Link href="/" className="text-light ml-3">Kids</Nav.Link>
            <Nav.Link href="/" className="text-light ml-3">Shoes</Nav.Link>
            <Nav.Link href="/" className="text-light ml-3">Brands</Nav.Link>
          </Nav>
          <SearchBar className="search-bar" />
          <Cart inverse={true} className="cart" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;