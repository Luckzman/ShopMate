import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import InlineError from '../../presentation/InlineError';
import { loginValidator } from '../../../utils/validate';
import './LoginForm.scss';


export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
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
    const { displaySignupModal } = this.props;
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h3 className="heading">LOGIN</h3>
        <Input
          name="email"
          value={user.email}
          onChange={this.handleChange}
          placeholder="Email"
          className="email-input"
        />
        {errors.email && <InlineError text={errors.email} />}

        <Input
          name="password"
          value={user.password}
          type="password"
          className="email-input"
          placeholder="Password"
          onChange={this.handleChange}
        />
        {errors.password && <InlineError text={errors.password} />}
        <Button type="submit" name="Login" handleClick={this.handleSubmit} />
        <p className="mt-3">I don't have an account <span className="register-link" onClick={displaySignupModal}>Register</span></p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return ({ user: state.auth })
};

LoginForm.propTypes = {
  user: PropTypes.object,
};

LoginForm.defaultProps = { user: {} };

export default connect(mapStateToProps, null)(LoginForm);