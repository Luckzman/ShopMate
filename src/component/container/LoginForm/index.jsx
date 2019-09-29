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

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { loginCustomer, hideModal } = this.props;
    const errors = loginValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    loginCustomer(user);
    hideModal()
  };
  
  displaySignupModal = () => {
    const { displaySignup, hideModal } = this.props;
    hideModal();
    displaySignup()
  }

  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({ user });
  };

  render() {
    const { user, errors } = this.state;
    const { displaySignupModal, customers } = this.props;
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
    <Button type="submit" handleClick={this.handleSubmit}>{customers.isLoading ? <SmallLoader /> : 'Login'}</Button>
        <p className="mt-3">I don't have an account <span className="register-link" onClick={this.displaySignupModal}>Register</span></p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { customers } = state;
  console.log(customers, 'customers');
  return ({ customers })
};

LoginForm.propTypes = {
  user: PropTypes.object,
};

LoginForm.defaultProps = { user: {} };

export default connect(mapStateToProps, { loginCustomer })(LoginForm);