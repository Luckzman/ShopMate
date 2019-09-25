import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = (props) => {
  const { name, className, type, value, onChange, placeholder } = props;
  return (
    <input
      name={name}
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};


Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  className: '',
  type: 'text',
  placeholder: '',
};

export default Input;