import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import InlineError from '../../presentation/InlineError';
import { getCustomerProfile, updateCustomerProfile } from '../../../store/actions';
import { userProfileValidator } from '../../../utils/validate';
import '../LoginForm/LoginForm.scss';

export class UserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        mob_phone: '',
        day_phone: '',
        eve_phone: '',
      },
      errors: {}
    };
  }

  componentDidMount = () => {
    const { getCustomerProfile } = this.props;
    getCustomerProfile();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const {customers: { customer: { name, email } }} = this.props;
    console.log(user, 'user');
    user.name = name;
    user.email = email;
    const { updateCustomerProfile } = this.props;
    const errors = userProfileValidator(user);
    if (errors) {
      console.log(errors, 'errors')
      this.setState({ errors });
    }
    updateCustomerProfile(user);
    
  };

  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value
    this.setState({ user });
  };

  render() {
    const { user, errors } = this.state;
    const { customers } = this.props;
    console.log(customers, 'customers')
    return (
      <form className="custom-form" onSubmit={this.handleSubmit}>
        <h3 className="heading">Customer Profile</h3>
        <Input
          name="name"
          value={ customers.customer.name}
          disabled={true}
          placeholder="Name"
        />
        {errors.name && <InlineError text={errors.name} />}
        
        <Input
          name="email"
          value={ customers.customer.email }
          disabled={true}
          placeholder="Email"
        />
        {errors.email && <InlineError text={errors.email} />}

        <Input
          name="mob_phone"
          value={user.mob_phone }
          type="text"
          placeholder="Mobile Phone"
          onChange={this.handleChange}
        />
        {errors.mobilePhone && <InlineError text={errors.mobilePhone} />}
        
        <Input
          name="day_phone"
          value={ user.day_phone }
          type="text"
          placeholder= "Day Phone"
          onChange={this.handleChange}
        />
        {errors.dayPhone && <InlineError text={errors.dayPhone} />}
        
        <Input
          name="eve_phone"
          value={ user.eve_phone }
          type="text"
          placeholder= "Evening Phone"
          onChange={this.handleChange}
        />
        {errors.eveningPhone && <InlineError text={errors.eveningPhone} />}
        
        <Button type="submit" name="Update Profile" handleClick={this.handleSubmit} />
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { customers } = state;
  return ({ customers })
};

UserProfileForm.propTypes = {
  customers: PropTypes.object,
};

UserProfileForm.defaultProps = { customers: {} };

export default connect(mapStateToProps, { getCustomerProfile, updateCustomerProfile })(UserProfileForm);