import axios from 'axios';

export const actionTypes = {
  GET_ALL_CATEGORIES: "GET_ALL_CATEGORIES",
  GET_ALL_CATEGORIES_ERROR: "GET_ALL_CATEGORIES_ERROR",
  GET_ALL_DEPARTMENTS: "GET_ALL_DEPARTMENTS",
  GET_ALL_DEPARTMENTS_ERROR: "GET_ALL_DEPARTMENTS_ERROR",
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  GET_ALL_PRODUCTS_ERROR: "GET_ALL_PRODUCTS_ERROR",
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
        console.log(response)
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