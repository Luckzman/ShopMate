import { actionTypes } from '../actions';

export const categories = (state = {error: false}, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_CATEGORIES:
      return action.payload;
    case actionTypes.GET_ALL_CATEGORIES_ERROR:
      return {
        ...state,
        data: action.payload,
        error: true,
      }
    default:
      return state
  }
}

export const departments = (state = [], action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_DEPARTMENTS:
      return action.payload;
    case actionTypes.GET_ALL_DEPARTMENTS_ERROR:
      return {
        ...state,
        data: action.payload,
        error: true,
      }
      default:
        return state
  }
}

export const products = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return action.payload;
    case actionTypes.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        data: action.payload,
        error: true,
      }
      default:
        return state
  }
}