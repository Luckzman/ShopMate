import React from 'react';
import PropTypes from 'prop-types';
import './SelectBox.scss';

const SelectBox = ({name, handleChange, children, value}) => {
  return (
    <select name={name} className="selectbox" value={value} onChange={handleChange}>
      {children}
    </select>
  )
}

export default SelectBox;
