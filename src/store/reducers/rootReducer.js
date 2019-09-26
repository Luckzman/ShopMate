import {combineReducers} from 'redux';
import {
  categories,
  departments,
  products,
  productDetails,
  cart,
  customers,
  regions
} from './';

export default combineReducers({
  categories,
  departments,
  products,
  productDetails,
  cart,
  customers,
  regions
})
