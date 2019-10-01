import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import {StripeProvider, Elements } from 'react-stripe-elements';
import { CardForm } from '../../presentation/CardForm';
import { MiniLoader } from '../../presentation/Loader';
import { createStripeCharge, getOrderDetails, getTotalAmount, getCustomerProfile } from '../../../store/actions'
import './OrderSummaryCard.scss';

class OrderSummaryCard extends Component {

  state = {
    showModal: false,
    errorMessage: '',
  }

  componentDidMount() {
    const {getTotalAmount, getCustomerProfile, cart } = this.props;
    getTotalAmount(cart.cart_id);
    getCustomerProfile();
  }
  
  componentDidUpdate(prevProps) {
    const {orders: { orderId }, getOrderDetails} = this.props;
    if (orderId !== prevProps.orders.orderId) {
      getOrderDetails(orderId);
    }
  }

  /**
   * @method handleCheckout
   * @description This method handles checkout of an order
   * @returns {null}
   */
  handleCheckout = (id) => {
    const {createStripeCharge, orders: {orderId}, cart: {total_amount}} = this.props;
    console.log(id)
      const paymentDetails = {
        stripeToken: id,
        order_id: orderId,
        description: `Checkout with ${orderId}`,
        amount: Math.round(parseInt(total_amount, 10) * 100),
        currency: 'GBP'
      }
      createStripeCharge(paymentDetails);
    
  }

  render() {
    const { orders, cart, stripe } = this.props;
    return (
      <>
        {orders.isLoading ? <MiniLoader /> : <div className="summary">
          <h3 className="summary-heading title">Order Summary</h3>
          <div className="summary-content">
            <h6 className="details">{`Order Id: ${orders.orderId}`}</h6>
            <h6 className="details">Details</h6>
            {orders.data && orders.data.map((order, i) => {
              return (
                <div key={`order${i}`} className="summary-details">
                  <p className="details-title">{order.product_name}</p>
                  <p className="price">&pound; {order.subtotal}</p>
                </div>)})
            }
          </div>
          <div className="summary-footer">
            <h6 className="details">Total</h6>
            <h6 className="total-price">&pound; {cart.total_amount}</h6>
          </div>
          <hr />
          <div className="checkout">
            <StripeProvider apiKey="pk_test_NcwpaplBCuTL6I0THD44heRe">
              <Elements>
                <CardForm stripe={stripe} totalAmount={cart.total_amount} handleResult={(id) => {this.handleCheckout(id)}} />
              </Elements>
            </StripeProvider>
          </div>
        </div>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart, orders, customers, stripe } = state;
  return { cart, orders, customers, stripe };
}


OrderSummaryCard.propTypes = {
  cart: PropTypes.object.isRequired,
  orders: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired,
  createStripeCharge: PropTypes.func.isRequired,
  getOrderDetails: PropTypes.func.isRequired,
  getTotalAmount: PropTypes.func.isRequired,
  getCustomerProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {createStripeCharge, getOrderDetails, getTotalAmount, getCustomerProfile})(OrderSummaryCard);
