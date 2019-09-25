import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';
import './TopNav.scss';

const TopNav = ({ cartCount, triggerLoginModal, triggerSignupModal }) => {
  return (
    <div className="container top-nav">
      <div className="login-links">
        <span>Hi</span>
        <button onClick={triggerLoginModal}>Log in</button>
        <span>or</span>
        <button onClick={triggerSignupModal}>Register</button>
      </div>
      <div className="center-links">
        <Link to="/">Daily Deals</Link>
        <Link to="/">Help</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="cart-links">
        <div className="grp">
          <img
            className="grp-img"
            src="https://res.cloudinary.com/dx0nauane/image/upload/v1568925880/gbr.png"
            alt="british logo" />
          <span>&pound; gbp</span>
        </div>
        <CartIcon cartCount={cartCount} />
        <div>Your bag: &pound; 300</div>
      </div>
    </div>
  )
}

export default TopNav;
