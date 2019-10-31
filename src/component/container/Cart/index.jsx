import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from '../../presentation/Modal';
import { getUser } from '../../../utils/authHelper';

import OrderSummaryCard from '../OrderSummaryCard';
import {
  removeCartItem,
  getTotalAmount,
  updateCartItemQuantity,
  getAllCartItem,
  getCustomerProfile,
  placeOrder,
} from '../../../store/actions';
import QuantitySelector from '../../presentation/QuantitySelector';
import './cart.scss';

class Cart extends Component {
  
  state = {
    showOrderSummaryModal: false,
  }
  
  componentDidMount() {
    const { getAllCartItem, getTotalAmount, getCustomerProfile, cart } = this.props;
    getAllCartItem(cart.cart_id); 
    getTotalAmount(cart.cart_id);
    getCustomerProfile();
  }
  
  /**
   * @method handleRemoveCartItem
   * @description This method removes an Item from cart
   * @param {number} id This is index position of the item in the cart
   * @param {number} productId This the the id the product, The productId comes from the backend
   * @returns {null}
   */
  handleRemoveCartItem = (id, productId) => {
    const { removeCartItem } = this.props;
    removeCartItem(id, productId);
  }

  /**
   * @method handleCartQuantity
   * @description This method updates the quantity of an item in the cart
   * @param {number} itemId This is the unique Id of the item to be updated. The data comes from the backend
   * @param {number} quantity This the new value of the new updated quantity
   * @returns {null}
   */
  handleCartQuantity = (itemId, quantity) => {
    const { updateCartItemQuantity, cart } = this.props;
    updateCartItemQuantity(itemId, quantity); 
  }

  /**
   * @method handleShowOrderSummaryModal
   * @description This method displays  order summary modal if user is authenticated
   * @returns {null}
   */
  handleShowOrderSummaryModal = () => {
    const { showOrderSummaryModal, displayLoginModal } = this.state;
    const { placeOrder, customers, cart } = this.props;
    const order = {
      cart_id: cart.cart_id,
      shipping_id: 1,
      tax_id: 1
    }
    if(!getUser) {
      toast.info('Please Login, Redirecting to Homepage', (() => this.props.history.push("/"))())
    }
    
      placeOrder(order);
      this.setState({ showOrderSummaryModal: !showOrderSummaryModal });
    
  }
  
  render() {
    const { cart } = this.props;
    const { showOrderSummaryModal } = this.state;
    return (
        <div className="cart">
          {showOrderSummaryModal &&
            <Modal 
              modalSize={"sm"}
              hideModal={this.handleShowOrderSummaryModal}
            >
              <OrderSummaryCard />
            </Modal>}
          <h5 className="title">{`${cart.data.length} Item In Your Cart`}</h5>
          <div className="cart-header">
            <p className="item-name">Item</p>
            <p className="size">Size</p>
            <p className="qty">Quantity</p>
            <p className="price">Price</p>
            <p className="subtotal">SubTotal</p>
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
            <button className="checkout-btn" onClick={this.handleShowOrderSummaryModal}>Order</button>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cart, customers, orders } = state;
  console.log(state)
  return {cart, customers, orders}
}

Cart.propTypes = {
  user: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired,
  getAllCartItem: PropTypes.func.isRequired, 
  getTotalAmount: PropTypes.func.isRequired,
  getCustomerProfile: PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  updateCartItemQuantity: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  removeCartItem,
  updateCartItemQuantity,
  getTotalAmount,
  getAllCartItem,
  getCustomerProfile,
  placeOrder
})(withRouter(Cart));
