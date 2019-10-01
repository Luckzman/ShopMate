import React from 'react';
import PropTypes from 'prop-types';
import './SelectBox.scss';

/**
 * @description A resuable selectbox component
 * @param {object} props
 * @returns {JSX}
 */
const SelectBox = ({name, handleChange, children, value}) => {
  return (
    <select name={name} className="selectbox" value={value} onChange={handleChange}>
      {children}
    </select>
  )
}

SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SelectBox;
