import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import Button from '../../presentation/Button';
import InlineError from '../../presentation/InlineError';
// import { signupValidator } from '../../../utils/validate';
import '../LoginForm/LoginForm.scss';

export class OrderForm extends Component {
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
    // const errors = signupValidator(user);
    // if (errors) {
    //   this.setState({ errors });
    // }
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
          name="orderId"
          value={user.orderId}
          // onChange={this.handleChange}
          placeholder="OrderId"
        />

        <Input
          name="regionId"
          value={user.regionId}
          onChange={this.handleChange}
          placeholder="regionId"
        />

        <Input
          name="taxId"
          value={user.taxId}
          placeholder="TaxId"
          // onChange={this.handleChange}
        />
        
        <Button type="submit" name="Register" handleClick={this.handleSubmit} />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return ({ user: state.auth })
};

OrderForm.propTypes = {
  user: PropTypes.object,
};

OrderForm.defaultProps = { user: {} };

export default connect(mapStateToProps, null)(OrderForm);