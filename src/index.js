import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';
import App from './App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));
