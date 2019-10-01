import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import './QuantitySelector.scss';

class QuantitySelector extends Component {
  
  state = {
    quantity: 1,
  }
  
  /**
   * @method decrement
   * @description This method decrement product quantity by 1
   * @returns {null}
   */
  decrement = () => {
    const { quantity } = this.state;
    if(quantity > 1) {
      this.setState({quantity: quantity-1})
    }
  }
  
  /**
   * @method increment
   * @description This method increment product quantity by 1
   * @returns {null}
   */
  increment = () => {
    const { quantity } = this.state;
    this.setState({quantity: quantity+1})
  }
  
  
  /**
   * @method getUpdatedQuantity
   * @description This method update product quantity by dispatching the getQuantity action
   * @returns {null}
   */
  getUpdatedQuantity = () => {
    const { quantity } = this.state;
    const { getQuantity } = this.props;
    getQuantity(quantity)
  }
  
  render() {
    const { quantity } = this.state;
    return (
      <div className="qty-selector">
        <button className="qty-btn minus-btn" onClick={this.decrement}>&#06;</button>
        <input className="qty-input" disabled value={quantity} />
        <button className="qty-btn" onClick={this.increment}>+</button>
        <div className="update-qty" onClick={this.getUpdatedQuantity}>
          <FontAwesomeIcon className="icon" icon={faCheckSquare} />
          <span>update</span>
        </div>
      </div>
    )
  }
}

QuantitySelector.propTypes = {
  getQuantity: PropTypes.func.isRequired
}


export default QuantitySelector;
