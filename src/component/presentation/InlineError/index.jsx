import React from 'react';
import PropTypes from 'prop-types';
import './InlineError.scss';

const InlineError = ({ text }) => {
  return <span className="inlineError">{text}</span>;
}
InlineError.propTypes = {
  text: PropTypes.string
};

InlineError.defaultProps = {
  text: ''
};

export default InlineError;