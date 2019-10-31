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
const NavBar = ({searchProduct, showCartIcon, categories, selectCategory, showModal, cartCount}) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-uppercase text-danger">shopmate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          {categories && categories.map((category, index) => {
            return <Navbar.Text className="navbar-texts" key={`${index}1`} onClick={() => selectCategory(category.category_id)}>{category.name}</Navbar.Text>})}
          </Nav>
          <SearchBar className="search-bar" searchProduct={searchProduct} />}
          {showCartIcon && <CartIcon
            inverse={true}
            className="cart-icon"
            cartCount={cartCount}
            showModal={showModal}
          />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

NavBar.propTypes = {
  showCartIcon: PropTypes.bool,
  categories: PropTypes.array,
  selectCategory: PropTypes.func.isRequired,
  searchProduct: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired
}

NavBar.defaultProps = {
  showCartIcon: false,
  categories: [],
}

export default NavBar;