import React, {Component} from 'react';
import {
  CardElement,
  injectStripe,
} from 'react-stripe-elements';
import Button from '../Button';
import { SmallLoader } from '../Loader';
import './CardForm.scss'
import { toast } from 'react-toastify';


// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
        ':&__PrivateStripeElement': {
          border:' 1px solid pink !important',
          borderRadius: '20px !important',
          padding:'10px !important',
          marginTop: '10px !important',
        }
      },
      invalid: {
        color: '#c23d4b',
      },
    }
  }
};

class _CardForm extends Component {
  state = {
    errorMessage: '',
  };

  handleChange = ({error}) => {
    if (error) {
      this.setState({errorMessage: error.message});
    }
  };

  handleSubmit = async(evt) => {
    evt.preventDefault();
    try {
      if (this.props.stripe) {
        const {token: {id}} = await this.props.stripe.createToken();
        this.props.handleResult(id);
      }
    } catch (error) {
        toast.error(this.state.errorMessage)
      }
  };

  render() {
    const { totalAmount, stripe } = this.props;
    console.log(stripe)
    return (
      <div className="checkout-card">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Card details
            <CardElement
              onChange={this.handleChange}
              {...createOptions()}
            />
          </label>
          <div className="error" role="alert">
            {this.state.errorMessage}
          </div>
          <Button type="submit" handleClick={this.handleSubmit}>{stripe.isLoading ? <SmallLoader /> : <>Pay &pound;{totalAmount}</>}</Button>
        </form>
      </div>
    );
  }
}

export const CardForm = injectStripe(_CardForm);