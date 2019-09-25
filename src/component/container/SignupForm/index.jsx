import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import InlineError from '../../presentation/InlineError';
import { loginValidator } from '../../../utils/validate';
import '../LoginForm/LoginForm.scss';

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const errors = loginValidator(user);
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
    const { displayLoginModal } = this.props;
    return (
      <form className="custom-form" onSubmit={this.handleSubmit}>
        <h3 className="heading">SIGNUP</h3>
        <Input
          name="name"
          value={user.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        {errors.email && <InlineError text={errors.email} />}
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

        <Input
          name="repeat-password"
          value={user.repeatPassword}
          type="password"
          placeholder="Repeat Password"
          onChange={this.handleChange}
        />
        {errors.password && <InlineError text={errors.password} />}
        <Button type="submit" name="Register" handleClick={this.handleSubmit} />
        <p className="mt-3">I already have an account <span className="register-link" onClick={displayLoginModal}>Login</span></p>
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