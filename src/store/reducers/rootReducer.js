import {combineReducers} from 'redux';
import {
  categories,
  departments,
  products,
  productDetails,
  cart
} from './';

export default combineReducers({
  categories,
  departments,
  products,
  productDetails,
  cart
})
