import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

/**
 * @description Reusable Modal Component
 * @param {object} props
 * @returns {JSX}
 */
function Modal({ children, hideModal, modalSize, classes }) {
  return (
    <div className="overlay">
      <div className={`${modalSize === "sm" ? "sm-size" : ""} cart-modal ${classes}`}>
        <button type="button" className="close" onClick={hideModal}>&times;</button>
        <div className="modalContent">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func.isRequired,
  classes: PropTypes.string,
  modalSize: PropTypes.string,
};

Modal.defaultProps = {
  classes: '',
  modalSize: ''
}
export default Modal;