import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {
  removeCartItem,
  getTotalAmount,
  updateCartItemQuantity,
  getAllCartItem
} from '../../../store/actions';
import QuantitySelector from '../../presentation/QuantitySelector';
import './cart.scss';

class Cart extends Component {

  componentDidMount() {
    const { getAllCartItem, cart } = this.props;
    getAllCartItem(cart.cart_id); 
  }
  
  handleRemoveCartItem = (id, productId) => {
    const { removeCartItem } = this.props;
    removeCartItem(id, productId);
  }
  
  handleCartQuantity = (itemId, quantity) => {
    const { updateCartItemQuantity, getTotalAmount, cart } = this.props;
    updateCartItemQuantity(itemId, quantity)  
    getTotalAmount(cart.cart_id);  
  }
  
  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        <h5 className="title">{`${cart.data.length} Item In Your Cart`}</h5>
        <div className="cart-header">
          <p className="item-name">Item</p>
          <p className="size">Size</p>
          <p className="qty">Quantity</p>
          <p className="price">Price</p>
          <p>SubTotal</p>
        </div>
        <div className="cart-container">
          {
            cart.data.map((item, index) => {
              const size = item.attributes.split(' ')[0];
              const color = item.attributes.split(' ')[1];
              return (
                <div key={`${item}${index}`} className="cart-body">
                  <div className="item-details">
                    <p className="name">{item.name}</p>
                    <p>{color}</p>
                    <p className="remove-text" onClick={() => {this.handleRemoveCartItem(index, item.item_id)}}><span className="remove-btn">&times;</span>Remove</p>
                  </div>
                  <p className="size">{size}</p>
                  <div className="qty">
                    <QuantitySelector getQuantity={(quantity) => {this.handleCartQuantity(item.item_id, quantity )}} />
                  </div>
                  <p className="price">&pound;{item.price}</p>
                  <p className="subtotal">&pound;{item.subtotal}</p>
                </div>
              )
            })
          }
        </div>
        <div className="cart-footer">
          <Link className="back-btn" to="/">Back to Shop</Link>
          <button className="checkout-btn" onClick={this.showOrderSummary}>Order</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cart } = state;
  return {cart}
}

export default connect(mapStateToProps, {
  removeCartItem,
  getTotalAmount,
  updateCartItemQuantity,
  getAllCartItem
})(Cart);
