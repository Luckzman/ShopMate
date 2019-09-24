import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

function Modal({ children, hideModal }) {
  return (
    <div className="overlay">
      <div className="cart-modal">
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
};

export default Modal;