import {combineReducers} from 'redux';
import {
  categories,
  departments,
  products,
  productDetails,
  cart,
  customers
} from './';

export default combineReducers({
  categories,
  departments,
  products,
  productDetails,
  cart,
  customers
})
