import React from 'react';
import Button from '../Button';
import './OrderSummaryCard.scss';

const OrderSummaryCard = () => {
  return (
    <div className="summary">
      <h3 className="summary-heading title">Order Summary</h3>
      <div className="summary-content">
        <h6 className="details">Details</h6>
        <div className="summary-details">
          <p className="details-title">Artificial Product</p>
          <p className="price">&pound; 80</p>
        </div>
      </div>
      <div className="summary-footer">
        <h6>Total</h6>
        <h6 className="total-price">&pound; 120</h6>
      </div>
      <Button name="Checkout" />
    </div>
  );
}

export default OrderSummaryCard;
