import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './CartIcon.scss';

const CartIcon = ({ cartCount, inverse, showModal }) => {
  return (
    <div className="cart-icon" onClick={showModal}>
      <FontAwesomeIcon icon={faShoppingBag} className={!inverse ? 'cart-bag' : 'cart-bag inverse-cart-bag'} />
      <div
        className={!inverse ? "cart-count" : "cart-count inverse-cart-count"}
        >
        <span>{cartCount}</span>
      </div>
    </div>
  )
}

CartIcon.propTypes = {
  cartCount: PropTypes.number,
  inverse: PropTypes.bool,
}

CartIcon.defaultProps = {
  cartCount: 0,
  inverse: false
}

export default CartIcon;
