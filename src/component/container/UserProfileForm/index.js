import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import { SmallLoader }  from '../../presentation/Loader';
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

  /**
   * @method handleSubmit
   * @description This handle update of login data by calling the updateCustomerProfile action dispatcher
   * @param {object} event - This is the event object
   * @returns {null}
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const {customers: { customer: { name, email } }} = this.props;
    user.name = name;
    user.email = email;
    const { updateCustomerProfile, hideModal } = this.props;
    const errors = userProfileValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    updateCustomerProfile(user, hideModal);
    
  };

  /**
   * @method handleChange
   * @description This method get user input value from input element
   * @param {object} event This is the event object
   * @return {null}
   */
  handleChange = (event) => {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value
    this.setState({ user });
  };

  render() {
    const { user, errors } = this.state;
    const { customers } = this.props;
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
        <Button type="submit" handleClick={this.handleSubmit}>
          {customers.isLoading ? <SmallLoader /> : 'Update Profile'}
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { customers } = state;
  return ({ customers })
};

UserProfileForm.propTypes = {
  customers: PropTypes.object.isRequired,
  getCustomerProfile: PropTypes.func.isRequired,
  updateCustomerProfile: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};

UserProfileForm.defaultProps = { customers: {} };

export default connect(mapStateToProps, { getCustomerProfile, updateCustomerProfile })(UserProfileForm);
