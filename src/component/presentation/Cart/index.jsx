import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Cart.scss';

const Cart = ({ cartCount, inverse }) => {
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingBag} className={!inverse ? 'cart-bag' : 'cart-bag inverse-cart-bag'} />
      <div className={!inverse ? "cart-count" : "cart-count inverse-cart-count"}>
        <span>{cartCount}</span>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cartCount: PropTypes.number,
  inverse: PropTypes.bool,
}

Cart.defaultProps = {
  cartCount: 0,
  inverse: false
}

export default Cart;
