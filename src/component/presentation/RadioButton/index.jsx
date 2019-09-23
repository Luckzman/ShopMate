import React from 'react';
import Proptypes from 'prop-types';
import './RadioButton.scss';

const RadioButton = ({ options, onChange, selected }) => {
  return (
    <div className="color-selector">
      <p className="label">Color</p>
      {options.map((color) => {
        const outerBorderColor = {
          border: `1px solid ${selected === color.value ? selected : '#c5c5c5'}`,
        }
        const innerColor = {
          border: `1px solid ${color.value}`,
          backgroundColor: `${color.value}`
        }
        return (
          <div className="radio-color" key={color.value}>
            <label htmlFor="noteColor">
              <div style={outerBorderColor} className="outer-circle">
                <div style={innerColor} className="inner-circle">
                </div>
              </div>
            </label>
            <input
              type="radio"
              name="noteColor"
              value={color.value}
              checked={selected === color.value}
              onChange={onChange}
            />
          </div>
        )
      })}
    </div>
  );
}

RadioButton.propTypes = {
  options: Proptypes.arrayOf(Proptypes.object),
  onChange: Proptypes.func,
  selected: Proptypes.string,
}

export default RadioButton;