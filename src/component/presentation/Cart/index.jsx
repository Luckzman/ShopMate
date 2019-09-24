import React from 'react';
import './Cart.scss';

const Cart = ({cart}) => {
  return (
    <div className="cart">
      <h3>{`${cart} in the cart`}</h3>
      <div className="cart-header">
        <p className="item-name">Item</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>
    </div>
  )
}

export default Cart;
