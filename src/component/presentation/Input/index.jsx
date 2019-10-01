import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

/**
 * @description Reusable Input Component
 * @param {object} props
 * @returns {JSX}
 */
const Input = (props) => {
  const { name, className, type, value, onChange, placeholder, disabled } = props;
  return (
    <input
      name={name}
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};


Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  className: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  onChange: () => {}
};

export default Input;