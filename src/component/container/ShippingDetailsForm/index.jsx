import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import InlineError from '../../presentation/InlineError';
import { shippingDetailsValidator } from '../../../utils/validate';
import '../LoginForm/LoginForm.scss';

export class ShippingDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        address1: '',
        address2: '',
        city : '',
        region: '',
        postalCode: '',
        country: '',
        shippingRegionId: ''
      },
      errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const errors = shippingDetailsValidator(user);
    if (errors) {
      this.setState({ errors });
    }
  };

  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({ user });
  };

  render() {
    const { user, errors } = this.state;
    return (
      <form className="custom-form" onSubmit={this.handleSubmit}>
        <h3 className="heading">SIGNUP</h3>
        <Input
          name="address1"
          value={user.name}
          onChange={this.handleChange}
          placeholder="Address 1"
        />
        {errors.address1 && <InlineError text={errors.address1} />}
        
        <Input
          name="address2"
          value={user.name}
          onChange={this.handleChange}
          placeholder="Address 2"
        />
        {errors.address2 && <InlineError text={errors.address2} />}
        
        <Input
          name="city"
          value={user.city}
          onChange={this.handleChange}
          placeholder="City"
        />
        {errors.city && <InlineError text={errors.city} />}

        <Input
          name="region"
          value={user.region}
          placeholder="Region"
          onChange={this.handleChange}
        />
        {errors.region && <InlineError text={errors.region} />}

        <Input
          name="postalCode"
          value={user.postalCode}
          placeholder= "Postal Code"
          onChange={this.handleChange}
        />
        {errors.postalCode && <InlineError text={errors.postalCode} />}
        
        <Input
          name="country"
          value={user.country}
          placeholder= "Country"
          onChange={this.handleChange}
        />
        {errors.country && <InlineError text={errors.country} />}
        
        <Input
          name="shippingRegionId"
          value={user.shippingRegionId}
          placeholder= "Shipping Region Id"
          onChange={this.handleChange}
        />
        {errors.shippingRegionId && <InlineError text={errors.shippingRegionId} />}
        
        
        <Button type="submit" name="Update Profile" handleClick={this.handleSubmit} />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return ({ user: state.auth })
};

ShippingDetailsForm.propTypes = {
  user: PropTypes.object,
};

ShippingDetailsForm.defaultProps = { user: {} };

export default connect(mapStateToProps, null)(ShippingDetailsForm);