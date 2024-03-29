import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../presentation/Input';
import SelectBox from '../../presentation/SelectBox';
import { SmallLoader }  from '../../presentation/Loader';
import Button from '../../presentation/Button';
import InlineError from '../../presentation/InlineError';
import {getRegions, updateShippingInfo} from '../../../store/actions';
import { shippingDetailsValidator } from '../../../utils/validate';
import '../LoginForm/LoginForm.scss';

export class ShippingDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        address_1: '',
        address_2: '',
        city : '',
        region: '',
        postal_code: '',
        country: '',
        shipping_region_id: ''
      },
      errors: {}
    };
  }

  componentDidMount() {
    const { getRegions } = this.props;
    getRegions();
  }

  /**
   * @method handleSubmit
   * @description This handle submission of customer shipping information by calling the updateShippingInfo dispatch action
   * @param {object} event - This is the event object
   * @returns {null}
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { updateShippingInfo, hideModal } = this.props;
    const errors = shippingDetailsValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    updateShippingInfo(user, hideModal);
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
    user[name] = value;
    const combineRegion = user.region;
    user.region = combineRegion.split('*')[0];
    user.shipping_region_id = combineRegion.split('*')[1]
    this.setState({ user });
  };

  render() {
    const { user, errors } = this.state;
    const { regions, customers } = this.props;
    return (
      <form className="custom-form" onSubmit={this.handleSubmit}>
        <h3 className="heading">SIGNUP</h3>
        <Input
          name="address_1"
          value={user.address_1}
          onChange={this.handleChange}
          placeholder="Address"
        />
        {errors.address_1 && <InlineError text={errors.address_1} />}
        
        <Input
          name="city"
          value={user.city}
          onChange={this.handleChange}
          placeholder="City"
        />
        {errors.city && <InlineError text={errors.city} />}

        <SelectBox
          name="region"
          value={user.region}
          handleChange={this.handleChange}
        >
          {regions.map((region, i) => <option key={`item${i}`}  value={`${region.shipping_region}*${region.shipping_region_id}`}>{region.shipping_region}</option>)}
        </SelectBox>
        {errors.region && <InlineError text={errors.region} />}

        <Input
          name="postal_code"
          value={user.postal_code}
          placeholder= "Postal Code"
          onChange={this.handleChange}
        />
        {errors.postal_code && <InlineError text={errors.postal_code} />}
        
        <Input
          name="country"
          value={user.country}
          placeholder= "Country"
          onChange={this.handleChange}
        />
        {errors.country && <InlineError text={errors.country} />}
        
        <Input
          name="shipping_region_id"
          value={user.shipping_region_id}
          placeholder="Select a region"
          disabled={true}
        />

        <Button type="submit" handleClick={this.handleSubmit}>
        {customers.isLoading ? <SmallLoader /> : 'Update Shipping Details'}
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { regions, customers } = state;
  return ({ regions, customers })
};

ShippingDetailsForm.propTypes = {
  regions: PropTypes.array.isRequired,
  customers: PropTypes.object.isRequired,
  getRegions: PropTypes.func.isRequired,
  updateShippingInfo: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};

ShippingDetailsForm.defaultProps = [];

export default connect(mapStateToProps, { getRegions, updateShippingInfo })(ShippingDetailsForm);