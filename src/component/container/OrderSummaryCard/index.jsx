import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../presentation/Button';
import { getOrderDetails, getTotalAmount } from '../../../store/actions'
import './OrderSummaryCard.scss';

class OrderSummaryCard extends Component {
  componentDidMount() {
    const {getOrderDetails, getTotalAmount, orders, cart } = this.props;
    // console.log(orders.orderId)
    getTotalAmount(cart.cart_id);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.orders.orderId !== prevProps.orders.orderId) {
      this.props.getOrderDetails(this.props.orders.orderId);
    }
  }

  render() {
    const {orders, cart} = this.props;
    console.log(orders, 'orders');
    return (
      <div className="summary">
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
          <h6>Total</h6>
          <h6 className="total-price">&pound; {cart.total_amount}</h6>
        </div>
        <Button name="Checkout" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart, orders } = state;
  console.log(cart, orders)
  return { cart, orders };
}

export default connect(mapStateToProps, {getOrderDetails, getTotalAmount})(OrderSummaryCard);
