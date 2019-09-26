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
    }
  }
  
  increment = () => {
    const { quantity } = this.state;
    this.setState({quantity: quantity+1})
  }
  
  render() {
    const { quantity } = this.state;
    this.props.getQuantity(quantity)
    return (
      <div className="qty-selector">
        <button className="qty-btn minus-btn" onClick={this.decrement}>&#06;</button>
        <input className="qty-input" disabled value={quantity} />
        <button className="qty-btn" onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default QuantitySelector;
