import React from 'react';
import PropTypes from 'prop-types';
import './InlineError.scss';

/**
 * @description Reusable InlineError Component - It displays inline error during form validation
 * @param {object} props
 * @returns {JSX}
 */
const InlineError = ({ text }) => {
  return <span className="inlineError">{text}</span>;
}
InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;