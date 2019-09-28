import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Elements, StripeProvider } from 'react-stripe-elements';
import {Link} from 'react-router-dom';
import Modal from '../../presentation/Modal';
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
  
  handleRemoveCartItem = (id, productId) => {
    const { removeCartItem } = this.props;
    removeCartItem(id, productId);
  }
  
  handleCartQuantity = (itemId, quantity) => {
    const { updateCartItemQuantity, cart } = this.props;
    updateCartItemQuantity(itemId, quantity); 
  }
  
  // check if user is authenticated else display signup/login modal
  // check if user shipping details is updated else display shipping update modal
  // proceed to order summary modal and checkout.
  handleShowOrderSummaryModal = () => {
    const { showOrderSummaryModal } = this.state;
    const { placeOrder, cart } = this.props;
    const order = {
      cart_id: cart.cart_id,
      shipping_id: 1,
      tax_id: 1
    }
    placeOrder(order);
    this.setState({ showOrderSummaryModal: !showOrderSummaryModal });
  }
  
  render() {
    const { cart, customers } = this.props;
    const { showOrderSummaryModal } = this.state;
    return (
      <StripeProvider apiKey="pk_test_Si8RHCPkzNZuBJAmF9WkCr5p00kHHjk4wO">
        <div className="cart">
          {showOrderSummaryModal &&
            <Modal 
              modalSize={"sm"}
              hideModal={this.handleShowOrderSummaryModal}
            >
              <Elements>
                <OrderSummaryCard />
              </Elements>
            </Modal>}
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
            <button className="checkout-btn" onClick={this.handleShowOrderSummaryModal}>Order</button>
          </div>
        </div>
      </StripeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  const { cart, customers } = state;
  console.log(state, 'store');
  return {cart, customers}
}

export default connect(mapStateToProps, {
  removeCartItem,
  updateCartItemQuantity,
  getTotalAmount,
  getAllCartItem,
  getCustomerProfile,
  placeOrder
})(Cart);
