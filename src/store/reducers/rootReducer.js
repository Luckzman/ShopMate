import {combineReducers} from 'redux';
import {
  categories,
  departments,
  products,
  productDetails
} from './';

export default combineReducers({
  categories,
  departments,
  products,
  productDetails
})
