import React from 'react';
import Proptypes from 'prop-types';
import './RadioButton.scss';

/**
 * @description Reusable RadioButton Component
 * @param {object} props
 * @returns {JSX}
 */
const RadioButton = ({onChange, selected }) => {
  const colors = ['grey', 'blue', 'red', 'magenta', 'yellow', 'green', 'purple'];
  return (
    <div className="color-selector">
      <p className="label">Color</p>
      {colors.map((color) => {
        const outerBorderColor = {
          border: `1px solid ${selected === color ? selected : '#c5c5c5'}`,
        }
        const innerColor = {
          border: `1px solid ${color}`,
          backgroundColor: `${color}`
        }
        return (
          <div className="radio-color" key={color}>
            <label htmlFor="noteColor">
              <div style={outerBorderColor} className="outer-circle">
                <div style={innerColor} className="inner-circle">
                </div>
              </div>
            </label>
            <input
              type="radio"
              name="noteColor"
              className="radio-input"
              value={color}
              checked={selected === color}
              onChange={onChange}
            />
          </div>
        )
      })}
    </div>
  );
}

RadioButton.propTypes = {
  onChange: Proptypes.func.isRequired,
  selected: Proptypes.string.isRequired,
}

export default RadioButton;