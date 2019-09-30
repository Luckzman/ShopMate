import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../presentation/Button';
import { MiniLoader } from '../../presentation/Loader';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { createStripeCharge, getOrderDetails, getTotalAmount, getCustomerProfile } from '../../../store/actions'
import './OrderSummaryCard.scss';

class OrderSummaryCard extends Component {

  state = {
    showModal: false
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

  handleCheckout = async() => {
    const {createStripeCharge, stripe: { createToken }, orders: {orderId}, cart: {total_amount}} = this.props;
    const { token: {id} } = await createToken();
    const paymentDetails = {
      stripeToken: id,
      order_id: orderId,
      description: `Checkout with ${orderId}`,
      amount: total_amount,
      currency: 'GBP'
    }
    createStripeCharge(paymentDetails);
  }

  render() {
    const {orders, cart, customers} = this.props;
    console.log(customers, 'cutomers');
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
            <p>Enter Your Card Details</p>
            <CardElement className="card-element" />
            <Button handleClick={this.handleCheckout}>Pay &pound;{`${cart.total_amount}`}</Button>
          </div>
        </div>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart, orders, customers } = state;
  return { cart, orders, customers };
}

export default injectStripe(connect(mapStateToProps, {createStripeCharge, getOrderDetails, getTotalAmount, getCustomerProfile})(OrderSummaryCard));
