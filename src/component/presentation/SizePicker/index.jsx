import React from 'react';
import PropTypes from 'prop-types';
import './SizePicker.scss';

const SizePicker = ({ getSize }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  return (
    <>
      <p className="label">Size</p>
      {
        sizes.map((size, i) => {
          return(
            <div key={`${size}${i}`} className="btns-container">
              <button className="btns-grey" onClick={() => getSize(size)}>{size}</button>
            </div>
          )})
      }
    </>
  )
};

SizePicker.propTypes = {
  size: PropTypes.array.isRequired,
}

export default SizePicker;
