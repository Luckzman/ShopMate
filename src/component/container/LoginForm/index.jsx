import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
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

  componentDidMount() {
    this.loadFbLoginApi();
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

  loadFbLoginApi() {

    window.fbAsyncInit = function() {
        window.FB.init({
            appId      : process.env.REACT_APP_APP_ID,
            cookie     : true,  // enable cookies to allow the server to access
            // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use version 2.1
        });
    };

    console.log("Loading fb api");
      // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me', {fields: 'name,email,picture'}, function(response) {
      console.log(response, 'response')
    console.log('Successful login for: ' + response.name);
    // document.getElementById('status').innerHTML =
    //   'Thanks for logging in, ' + response.name + '!';
    });
  }

  statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response, 'response');
    if (response.status === 'connected') {
      console.log('connected')
      this.testAPI();
    // } else if (response.status === 'not_authorized') {
    //     console.log("Please log into this app.");
    } else {
        console.log("Please log into this facebook.");
        // window.FB.login(loginResponse => this.checkLoginState(loginResponse), true);
    }
  }

  checkLoginState = () => {
    window.FB.getLoginStatus((response) => {
      this.statusChangeCallback(response);
    })
  }

  handleFacebookLogin = () => {
    window.FB.login(this.checkLoginState());
  }

  render() {
    const { user, errors } = this.state;
    const { customers } = this.props;
    library.add(fab);
    return (
      <>
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
          
          
          {/* <hr />
          <Button
            customClass="facebook-btn"
            handleClick={this.handleFacebookLogin}
          >
            <FontAwesomeIcon icon={['fab', 'facebook']} className="facebook-icon" />
            Login with facebook
          </Button> */}
        </form>
      </>

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
