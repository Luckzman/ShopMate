import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import InlineError from '../../presentation/InlineError';
import { userProfileValidator } from '../../../utils/validate';
import '../LoginForm/LoginForm.scss';

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        mobilePhone: '',
        dayPhone: '',
        eveningPhone: '',
      },
      errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const errors = userProfileValidator(user);
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
          name="name"
          value={user.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        {errors.name && <InlineError text={errors.name} />}
        
        <Input
          name="email"
          value={user.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        {errors.email && <InlineError text={errors.email} />}

        <Input
          name="password"
          value={user.password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        {errors.password && <InlineError text={errors.password} />}

        <Input
          name="mobile-phone"
          value={user.mobilePhone}
          type="text"
          placeholder="Mobile Phone"
          onChange={this.handleChange}
        />
        {errors.mobilePhone && <InlineError text={errors.mobilePhone} />}
        
        <Input
          name="day-phone"
          value={user.dayPhone}
          type="text"
          placeholder= "Day Phone"
          onChange={this.handleChange}
        />
        {errors.dayPhone && <InlineError text={errors.dayPhone} />}
        
        <Input
          name="evening-phone"
          value={user.eveningPhone}
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
  return ({ user: state.auth })
};

SignupForm.propTypes = {
  user: PropTypes.object,
};

SignupForm.defaultProps = { user: {} };

export default connect(mapStateToProps, null)(SignupForm);