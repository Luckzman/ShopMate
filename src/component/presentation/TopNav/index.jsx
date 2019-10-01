import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import DropdownMenu from '../DropdownMenu';
import CartIcon from '../CartIcon';
import './topnav.scss';

/**
 * @description A resuable TopNav component
 * @param {object} props
 * @returns {JSX}
 */
const TopNav = ({ name, cartCount, totalAmount, triggerLoginModal, showModal, triggerSignupModal, handleProfileModal, handleShippingDetailsModal }) => {
  return (
      <Navbar collapseOnSelect expand="lg" className="container top-nav">
        <div className="login-links">
        <span>Hi</span>
        {
          !name ? (
            <>
              <button className="links" onClick={triggerLoginModal}>Log in</button>
              <span>or</span>
              <button className="links" onClick={triggerSignupModal}>Register</button>
            </>
          ) : <DropdownMenu 
          name={name} 
          handleProfileModal={handleProfileModal}
          handleShippingDetailsModal={handleShippingDetailsModal}
          /> 
        }
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <div className="center-links ">
            <Link to="/">Daily Deals</Link>
            <Link to="/">Help</Link>
            <Link to="/">Contact</Link>
          </div>
          <div className="cart-links ml-auto">
            <div className="grp">
              <img
                className="grp-img"
                src="https://res.cloudinary.com/dx0nauane/image/upload/v1568925880/gbr.png"
                alt="british logo" />
              <span>&pound; gbp</span>
            </div>
            <CartIcon cartCount={cartCount} showModal={showModal} />
            <div>Your bag: &pound; {totalAmount}</div>
          </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

TopNav.propTypes = {
  name: PropTypes.string.isRequired,
  cartCount: PropTypes.number.isRequired,
  totalAmount: PropTypes.string,
  triggerLoginModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  triggerSignupModal: PropTypes.func.isRequired,
  handleProfileModal: PropTypes.func.isRequired,
  handleShippingDetailsModal: PropTypes.string.isRequired,
}

TopNav.defaultProps = {
  totalAmount: 0
}
export default TopNav;
