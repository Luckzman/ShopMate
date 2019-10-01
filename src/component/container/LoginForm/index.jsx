import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import { SmallLoader }  from '../../presentation/Loader';
import Button from '../../presentation/Button';
import InlineError from '../../presentation/InlineError';
import { loginCustomer } from '../../../store/actions';
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

  /**
   * @method handleSubmit
   * @description This handle submission of login data by calling the loginCustomer action dispatcher
   * @param {object} event - This is the event object
   * @returns {null}
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { loginCustomer, hideModal } = this.props;
    const errors = loginValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    loginCustomer(user, hideModal);
  };
  
  /**
   * @method displaySignupModal
   * @description This method displays signup modal when user clicks on signup button link on the login modal
   */
  displaySignupModal = () => {
    const { displaySignup, hideModal } = this.props;
    hideModal();
    displaySignup()
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
        <h3 className="heading">LOGIN</h3>
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
        <Button
          type="submit"
          handleClick={this.handleSubmit}
        >
          {customers.isLoading ? <SmallLoader /> : 'Login'}
        </Button>
        <p className="mt-3">I don't have an account <span className="register-link" onClick={this.displaySignupModal}>Register</span></p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { customers } = state;
  return ({ customers })
};

LoginForm.propTypes = {
  customer: PropTypes.object.isRequired,
  loginCustomer: PropTypes.func.isRequired,
  displaySignup: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { loginCustomer })(LoginForm);
