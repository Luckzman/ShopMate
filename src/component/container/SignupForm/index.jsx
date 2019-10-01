import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import { SmallLoader }  from '../../presentation/Loader';
import InlineError from '../../presentation/InlineError';
import { signupValidator } from '../../../utils/validate';
import { signupCustomer } from '../../../store/actions';
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

  /**
   * @method handleSubmit
   * @description This handle submission of signup data by calling the signupCustomer action dispatcher
   * @param {object} event - This is the event object
   * @returns {null}
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const {signupCustomer, hideModal} = this.props;
    const errors = signupValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    delete user.repeatPassword;
    signupCustomer(user);
    hideModal();
  };
  
  /**
   * @method displayLoginModal
   * @description This method displays login modal when user clicks on login button link on the signup modal
   */
  displayLoginModal = () => {
    const {displayLogin, hideModal} = this.props;
    hideModal();
    displayLogin();
  }

  /**
   * @method handleChange
   * @description This method get user input value from input element
   * @param {object} event This is the event object
   * @return {null}
   */
  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({ user });
  };

  render() {
    const { user, errors } = this.state;
    const { customers } = this.props;
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
          name="repeatPassword"
          value={user.repeatPassword}
          type="password"
          placeholder="Repeat Password"
          onChange={this.handleChange}
        />
        {errors.password && <InlineError text={errors.password} />}
        <Button
          type="submit"
          handleClick={this.handleSubmit}
        >
          {customers.isLoading ? <SmallLoader /> : 'Register'}
        </Button>
        <p className="mt-3">I already have an account <span className="register-link" onClick={this.displayLoginModal}>Login</span></p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { customers } = state;
  return ({ customers })
};

SignupForm.propTypes = {
  customers: PropTypes.object.isRequired,
  signupCustomer: PropTypes.func.isRequired,
  displayLogin: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {signupCustomer})(SignupForm);