import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuantitySelector.scss';

class QuantitySelector extends Component {
  
  state = {
    quantity: 1,
  }
  
  decrement = () => {
    const { quantity } = this.state;
    if(quantity > 1) {
      this.setState({quantity: quantity-1})
      this.props.quantity(quantity)
    }
  }
  
  increment = () => {
    const { quantity } = this.state;
    this.setState({quantity: quantity+1})
    this.props.quantity(quantity)
  }
  
  render() {
    const { quantity } = this.state;
    return (
      <div className="qty-selector">
        <p>Quantity</p>
        <button className="minus-btn" onClick={this.decrement}>&#06;</button>
        <input disabled value={quantity} />
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default QuantitySelector;
