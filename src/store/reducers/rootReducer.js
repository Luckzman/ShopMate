import {combineReducers} from 'redux';
import {
  categories,
  departments,
  products
} from './';

export default combineReducers({
  categories,
  departments,
  products
})
