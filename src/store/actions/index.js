import axios from 'axios';
import { setToken, config, getToken, getUserIdFromLocalStorage } from '../../utils/authHelper';

export const actionTypes = {
  GET_ALL_CATEGORIES: "GET_ALL_CATEGORIES",
  GET_ALL_DEPARTMENTS: "GET_ALL_DEPARTMENTS",
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  SEARCH_PRODUCTS: "SEARCH_PRODUCTS",
  GET_SINGLE_PRODUCT_DETAILS: "GET_SINGLE_PRODUCT_DETAILS",
  GET_FILTERED_PRODUCTS_BY_CATEGORY: "GET_FILTERED_PRODUCTS_BY_CATEGORY",
  GET_FILTERED_PRODUCTS_BY_DEPARTMENT: "GET_FILTERED_PRODUCTS_BY_DEPARTMENT",
  GET_SINGLE_PRODUCT_DETAILS_ERROR: "GET_SINGLE_PRODUCT_DETAILS_ERROR",
  SEARCH_PRODUCTS_ERROR: "SEARCH_PRODUCTS_ERROR",
  GET_ALL_CATEGORIES_ERROR: "GET_ALL_CATEGORIES_ERROR",
  GET_ALL_DEPARTMENTS_ERROR: "GET_ALL_DEPARTMENTS_ERROR",
  GET_ALL_PRODUCTS_ERROR: "GET_ALL_PRODUCTS_ERROR",
  GET_FILTERED_PRODUCTS_BY_CATEGORY_ERROR: "GET_FILTERED_PRODUCTS_BY_CATEGORY_ERROR",
  GET_FILTERED_PRODUCTS_BY_DEPARTMENT_ERROR: "GET_FILTERED_PRODUCTS_BY_DEPARTMENT_ERROR",
  CREATE_CART: "CREATE_CART",
  CREATE_CART_ERROR: "CREATE_CART_ERROR",
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  ADD_PRODUCT_TO_CART_ERROR: "ADD_PRODUCT_TO_CART_ERROR",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  REMOVE_CART_ITEM_ERROR: "REMOVE_CART_ITEM_ERROR",
  SIGNUP_CUSTOMER: "SIGNUP_CUSTOMER",
  SIGNUP_CUSTOMER_ERROR: "SIGNUP_CUSTOMER_ERROR",
  LOGIN_CUSTOMER: "LOGIN_CUSTOMER",
  LOGIN_CUSTOMER_ERROR: "LOGIN_CUSTOMER_ERROR",
  GET_CUSTOMER_PROFILE: "GET_CUSTOMER_PROFILE",
  GET_CUSTOMER_PROFILE_ERROR: "GET_CUSTOMER_PROFILE_ERROR",
  UPDATE_CUSTOMER_PROFILE: "UPDATE_CUSTOMER_PROFILE",
  UPDATE_CUSTOMER_PROFILE_ERROR: "UPDATE_CUSTOMER_PROFILE_ERROR",
  GET_REGION: "GET_REGION",
  GET_REGION_ERROR: "GET_REGION_ERROR",
  UPDATE_CUSTOMER_SHIPPING_DETAILS: "UPDATE_CUSTOMER_SHIPPING_DETAILS",
  UPDATE_CUSTOMER_SHIPPING_DETAILS_ERROR: "UPDATE_CUSTOMER_SHIPPING_DETAILS_ERROR",
  UPDATE_CART_ITEM_QUANTITY: "UPDATE_CART_ITEM_QUANTITY",
  UPDATE_CART_ITEM_QUANTITY_ERROR: "UPDATE_CART_ITEM_QUANTITY_ERROR"
}

export const getAllCategories = () => {
  return (dispatch) => {
    return axios.get('https://backendapi.turing.com/categories')
      .then((response) => {
        dispatch({
          type: actionTypes.GET_ALL_CATEGORIES,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.GET_ALL_CATEGORIES_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}

export const getAllDepartments = () => {
  return (dispatch) => {
    return axios.get('https://backendapi.turing.com/departments')
      .then((response) => {
        dispatch({
          type: actionTypes.GET_ALL_DEPARTMENTS,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.GET_ALL_DEPARTMENTS_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}

export const getAllProducts = () => {
  return (dispatch) => {
    return axios.get('https://backendapi.turing.com/products')
      .then((response) => {
        dispatch({
          type: actionTypes.GET_ALL_PRODUCTS,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.GET_ALL_PRODUCTS_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}

export const getFilteredProductsByCategory = (categoryId) => {
  return (dispatch) => {
    return axios.get(`https://backendapi.turing.com/products/inCategory/${categoryId}`)
      .then((response) => {
        dispatch({
          type: actionTypes.GET_FILTERED_PRODUCTS_BY_CATEGORY,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.GET_FILTERED_PRODUCTS_BY_CATEGORY_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}

export const getFilteredProductsByDepartment = (departmentId) => {
  return (dispatch) => {
    return axios.get(`https://backendapi.turing.com/products/inDepartment/${departmentId}`)
      .then((response) => {
        dispatch({
          type: actionTypes.GET_FILTERED_PRODUCTS_BY_DEPARTMENT,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.GET_FILTERED_PRODUCTS_BY_DEPARTMENT_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}

export const searchProducts = (inputText) => {
  return (dispatch) => {
    return axios.get(`https://backendapi.turing.com/products/search?query_string=${inputText}`)
      .then((response) => {
        dispatch({
          type: actionTypes.SEARCH_PRODUCTS,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.SEARCH_PRODUCTS_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}

export const getSingleProductDetails = (productId) => {
  return (dispatch) => {
    return axios.get(`https://backendapi.turing.com/products/${productId}`)
      .then((response) => {
        dispatch({
          type: actionTypes.GET_SINGLE_PRODUCT_DETAILS,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.GET_SINGLE_PRODUCT_DETAILS_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}

export const signupCustomer = (user) => {
  return (dispatch) => {
    return axios.post("https://backendapi.turing.com/customers", user)
      .then((response) => {
        dispatch({
          type: actionTypes.SIGNUP_CUSTOMER,
          payload: response.data,
        })
        setToken(response.data.accessToken)
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.SIGNUP_CUSTOMER_ERROR,
            payload: error.response.data.error.message
          })
        }
      })
  }
}

export const loginCustomer = (user) => {
  return (dispatch) => {
    return axios.post("https://backendapi.turing.com/customers/login", user)
    .then((response) => {
        dispatch({
          type: actionTypes.LOGIN_CUSTOMER,
          payload: response.data,
        })
        setToken(response.data.accessToken)
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.LOGIN_CUSTOMER_ERROR,
            payload: error.response.data.error.message
          })
        }
      })
  }
}

export const getCustomerProfile = () => {
  return (dispatch) => {
    return axios.get("https://backendapi.turing.com/customer", config)
    .then((response) => {
        dispatch({
          type: actionTypes.GET_CUSTOMER_PROFILE,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.GET_CUSTOMER_PROFILE_ERROR,
            payload: error.response.data.error.message
          })
        }
      })
  }
}

export const updateCustomerProfile = (userProfile) => {
  return (dispatch) => {
    return axios.put("https://backendapi.turing.com/customer", userProfile, config)
    .then((response) => {
      console.log(response)
        dispatch({
          type: actionTypes.UPDATE_CUSTOMER_PROFILE,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error.response)
        if(error.response) {
          dispatch({
            type: actionTypes.UPDATE_CUSTOMER_PROFILE_ERROR,
            payload: error.response.data.error.message
          })
        }
      })
  }
}

export const updateShippingInfo = (shippingDetails) => {
  return (dispatch) => {
    return axios.put("https://backendapi.turing.com/customers/address", shippingDetails, config)
    .then((response) => {
        dispatch({
          type: actionTypes.UPDATE_CUSTOMER_SHIPPING_DETAILS,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.UPDATE_CUSTOMER_SHIPPING_DETAILS_ERROR,
            payload: error.response.data.error.message
          })
        }
      })
    }
}

export const updateCartItemQuantity = (itemId, quantity) => {
  return (dispatch) => {
    return axios.put(`https://backendapi.turing.com/shoppingcart/update/${itemId}`, {quantity})
    .then((response) => {
        dispatch({
          type: actionTypes.UPDATE_CART_ITEM_QUANTITY,
          payload: response.data,
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.UPDATE_CART_ITEM_QUANTITY_ERROR,
            payload: error.response.data.error.message
          })
        }
      })
  }
}

export const getRegions = () => {
  return (dispatch) => {
    return axios.get("https://backendapi.turing.com/shipping/regions")
    .then((response) => {
      console.log(response)
        dispatch({
          type: actionTypes.GET_REGION,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error.response)
        if(error.response) {
          dispatch({
            type: actionTypes.GET_REGION_ERROR,
            payload: error.response.data.error.message
          })
        }
      })
  }
}

export const addProductToCart = (productId, attributes) => {
  return (dispatch, getState) => {
    if(!getState().cart.isCartCreated){
      return axios.get("https://backendapi.turing.com/shoppingcart/generateUniqueId")
      .then((res) => {
        dispatch({
          type: actionTypes.CREATE_CART,
          payload: res.data,
        })
        const cart = {
          cart_id: res.data.cart_id,
          product_id: productId,
          attributes
        }
        return axios.post("https://backendapi.turing.com/shoppingcart/add", cart )
          .then((response) => {
              dispatch({
                type: actionTypes.ADD_PRODUCT_TO_CART,
                payload: response.data,
              })
            })
            .catch((error) => {
              if(error.response) {
                dispatch({
                  type: actionTypes.ADD_PRODUCT_TO_CART_ERROR,
                  payload: error.response.message
                })
              }
            })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.CREATE_CART_ERROR,
            payload: error.response.message
          })
        }
      })
    } else {
      const cart = {
        cart_id: getState().cart.cart_id,
        product_id: productId,
        attributes
      }
      return axios.post("https://backendapi.turing.com/shoppingcart/add", cart )
      .then((response) => {
          dispatch({
            type: actionTypes.ADD_PRODUCT_TO_CART,
            payload: response.data,
          })
        })
        .catch((error) => {
          if(error.response) {
            dispatch({
              type: actionTypes.ADD_PRODUCT_TO_CART_ERROR,
              payload: error.response.message
            })
          }
        })
    }
  }
}

export const removeCartItem = (id, productId) => {
  return (dispatch) => {
    return axios.delete(`https://backendapi.turing.com/shoppingCart/removeProduct/${productId}`)
      .then(() => {
        dispatch({
          type: actionTypes.REMOVE_CART_ITEM,
          id
        })
      })
      .catch((error) => {
        if(error.response) {
          dispatch({
            type: actionTypes.REMOVE_CART_ITEM_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}


