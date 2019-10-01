import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import SearchBar from '../SearchBar';
import CartIcon from '../CartIcon';
import './NavBar.scss';

/**
 * @description Reusable NavBar Component
 * @param {object} props
 * @returns {JSX}
 */
const NavBar = ({searchProduct, showModal, cartCount}) => {
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
          <SearchBar className="search-bar" searchProduct={searchProduct} />
          <CartIcon
            inverse={true}
            className="cart-icon"
            cartCount={cartCount}
            showModal={showModal}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

NavBar.propTypes = {
  searchProduct: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired
}

export default NavBar;