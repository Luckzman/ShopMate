import React from 'react';
import PropTypes from 'prop-types';
import './cart.scss';

const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
      <img
        src="https://res.cloudinary.com/dx0nauane/image/upload/v1568925901/black.png"
        alt="shopping cart icon" />
      <div className="cart-count">
        <span>{cartCount}</span>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cartCount: PropTypes.number,
}

Cart.defaultProps = {
  cartCount: 0,
}

export default Cart;
