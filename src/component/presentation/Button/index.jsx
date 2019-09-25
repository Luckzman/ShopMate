import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({type, customClass, name, handleClick}) => {
  return (
    <button type={type} className={`custom-btn ${customClass}`} onClick={handleClick}>{name}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  customClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

Button.defaultProps = {
  type: 'button',
  customClass: '',
}

export default Button;
