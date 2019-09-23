import React from 'react';
import PropTypes from 'prop-types';
import './SizePicker.scss';

const SizePicker = ({sizes}) => {
  return (
    <>
      <p className="label">Size</p>
      {
        sizes.map((size, i) => {
          return(
            <div key={`${size}${i}`} className="btns-container">
              <button className="btns-grey">{size}</button>
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
