import React from 'react';
import {Link} from 'react-router-dom';
import QuantitySelector from '../QuantitySelector';
import './Cart.scss';

const Cart = ({cart, removeCartItem}) => {
  const { data } = cart;
  console.log(data, "cart");
  return (
    <div className="cart">
      <h5 className="title">{`${data.length} Item In Your Cart`}</h5>
      <div className="cart-header">
        <p className="item-name">Item</p>
        <p>Size</p>
        <p className="qty">Quantity</p>
        <p className="price">Price</p>
      </div>
      <div className="cart-container">
        {
          data.map((item) => {
            const size = item.attributes.split(' ')[0];
            const color = item.attributes.split(' ')[1];
            return (
              <div className="cart-body">
                <img src={`https://backendapi.turing.com/images/products/${item.image}`} />
                <div className="item-details">
                  <p className="name">{item.name}</p>
                  <p>{color}</p>
                  <p className="remove-text" onClick={removeCartItem}><span className="remove-btn">&times;</span>Remove</p>
                </div>
                <p className="size">{size}</p>
                <div className="qty">
                  <QuantitySelector />
                </div>
                <p className="price">&pound;{item.price}</p>
              </div>
            )
          })
        }
      </div>
      <div className="cart-footer">
        <Link className="back-btn" to="/">Back to Shop</Link>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  )
}

export default Cart;
