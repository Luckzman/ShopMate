import { getUser } from '../../utils/authHelper';
import { actionTypes } from '../actionTypes';

export const categories = (state = {error: false}, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_CATEGORIES:
      return action.payload;
    case actionTypes.GET_ALL_CATEGORIES_ERROR:
      return {
        ...state,
        data: action.payload
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
      }
      default:
        return state
  }
}

export const products = (state = {isLoading: true}, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      }
    case actionTypes.GET_FILTERED_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.GET_FILTERED_PRODUCTS_BY_DEPARTMENT:
        return {
          ...state,
          ...action.payload
        }
    case actionTypes.SEARCH_PRODUCTS:
        return {
          ...state,
          ...action.payload
        }
    case actionTypes.SEARCH_PRODUCTS_ERROR:
      return action.payload;
    case actionTypes.GET_ALL_PRODUCTS_ERROR:
      return action.payload;
    case actionTypes.GET_FILTERED_PRODUCTS_BY_CATEGORY_ERROR:
      return action.payload;
    case actionTypes.GET_FILTERED_PRODUCTS_BY_DEPARTMENT_ERROR:
      return action.payload;
    default:
      return state;
  }
}

export const productDetails = (state = {isLoading: true}, action) => {
  switch(action.type) {
    case actionTypes.GET_SINGLE_PRODUCT_DETAILS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    case actionTypes.GET_SINGLE_PRODUCT_DETAILS_ERROR:
      return action.payload;
    default:
      return state
  }
}

const initialState = getUser ? {
  isAuthenticated: true, 
  isLoading: false,
  ...getUser
} : { isAuthenticated: false, isLoading: false};

export const customers = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SIGNUP_CUSTOMER:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    case actionTypes.SIGNUP_CUSTOMER_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
      }
    case actionTypes.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.LOGIN_CUSTOMER:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    case actionTypes.GET_CUSTOMER_PROFILE:
      return {
        ...state,
        customer: action.payload,
      }
      case actionTypes.GET_CUSTOMER_PROFILE_ERRORR:
        return {
          ...state,
          message: action.payload,
          isLoading: false
      }
    case actionTypes.UPDATE_CUSTOMER_PROFILE:
      return {
        ...state,
        customer: action.payload,
        isLoading: false
      }
    case actionTypes.UPDATE_CUSTOMER_PROFILE_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: false
      }
    case actionTypes.UPDATE_CUSTOMER_SHIPPING_DETAILS:
      return {
        ...state,
        customer: action.payload,
        isLoading: false
      }
      case actionTypes.UPDATE_CUSTOMER_SHIPPING_DETAILS_ERRORR:
        return {
          ...state,
          message: action.payload,
          isLoading: false
        }
      case actionTypes.LOGIN_CUSTOMER_ERROR:
        return {
          ...state,
          message: action.payload,
          isLoading: false
      }
    default:
      return state
  }
}

export const cart = (state = {isCartCreated: false}, action) => {
  switch(action.type) {
    case actionTypes.CREATE_CART:
      return {
        ...state,
        ...action.payload,
        isCartCreated: true
      }
    case actionTypes.CREATE_CART_ERROR:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        data: action.payload
      }
    case actionTypes.GET_CART_ITEMS:
      return {
        ...state,
        data: action.payload
      }
    case actionTypes.GET_TOTAL_AMOUNT:
      return {
        ...state,
        ...action.payload
      }
      case actionTypes.GET_TOTAL_AMOUNT_ERROR:
        return {
          ...state,
          ...action.payload
      }
    case actionTypes.GET_CART_ITEMS_ERROR:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        data: action.payload
      }
    case actionTypes.UPDATE_CART_ITEM_QUANTITY_ERROR:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        data: state.data.filter((data, i) => i !== action.id)
      }
    case actionTypes.ADD_PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
}

export const regions = (state = [], action) => {
  switch(action.type) {
    case actionTypes.GET_REGION:
      return action.payload
    case actionTypes.GET_REGION_ERROR:
      return action.payload
    default:
      return state
  }
}

export const orders = (state = {isLoading: true}, action) => {
  switch(action.type) {
    case actionTypes.PLACE_ORDER:
      return action.payload
    case actionTypes.PLACE_ORDER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actionTypes.GET_ORDER_DETAILS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case actionTypes.GET_ORDER_DETAILS_ERROR:
      return {
        ...state,
        error_message: action.payload
      }
    default:
      return state;
  }
}

export const stripe = (state = {isLoading: false}, action) => {
  switch(action.type) {
    case actionTypes.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.CREATE_STRIPE_CHARGE:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    case actionTypes.CREATE_STRIPE_CHARGE_ERROR:
      return action.payload
    default:
      return state;
  }
}