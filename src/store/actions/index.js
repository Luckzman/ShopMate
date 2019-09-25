import axios from 'axios';

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
  UPDATE_CART_ITEM_QTY: "UPDATE_CART_ITEM_QTY",
  UPDATE_CART_ITEM_QTY_ERROR: "UPDATE_CART_ITEM_QTY_ERROR"
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

export const updateCartItemQty = (quantity, productId) => {
  console.log(`${quantity}, ${productId}`, 'action');
  return (dispatch) => {
    return axios.put(`https://backendapi.turing.com/shoppingcart/update/${productId}`, {quantity})
      .then((response) => {
        console.log(response, 'response')
        dispatch({
          type: actionTypes.UPDATE_CART_ITEM_QTY,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
        console.log(error.response)
        if(error.response) {
          dispatch({
            type: actionTypes.UPDATE_CART_ITEM_QTY_ERROR,
            payload: error.response.message
          })
        }
      })
  }
}
