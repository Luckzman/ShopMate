import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * @description Reusable Button Component
 * @param {object} props
 * @returns {JSX}
 */
const Button = ({type, customClass, children, handleClick}) => {
  return (
    <button type={type} className={`custom-btn ${customClass}`} onClick={handleClick}>{children}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  customClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  type: 'button',
  customClass: '',
}

export default Button;
