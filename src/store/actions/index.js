import axios from 'axios';

export const actionTypes = {
  GET_ALL_CATEGORIES: "GET_ALL_CATEGORIES",
  GET_ALL_DEPARTMENTS: "GET_ALL_DEPARTMENTS",
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  SEARCH_PRODUCTS: "SEARCH_PRODUCTS",
  GET_FILTERED_PRODUCTS_BY_CATEGORY: "GET_FILTERED_PRODUCTS_BY_CATEGORY",
  GET_FILTERED_PRODUCTS_BY_DEPARTMENT: "GET_FILTERED_PRODUCTS_BY_DEPARTMENT",
  SEARCH_PRODUCTS_ERROR: "SEARCH_PRODUCTS_ERROR",
  GET_ALL_CATEGORIES_ERROR: "GET_ALL_CATEGORIES_ERROR",
  GET_ALL_DEPARTMENTS_ERROR: "GET_ALL_DEPARTMENTS_ERROR",
  GET_ALL_PRODUCTS_ERROR: "GET_ALL_PRODUCTS_ERROR",
  GET_FILTERED_PRODUCTS_BY_CATEGORY_ERROR: "GET_FILTERED_PRODUCTS_BY_CATEGORY_ERROR",
  GET_FILTERED_PRODUCTS_BY_DEPARTMENT_ERROR: "GET_FILTERED_PRODUCTS_BY_DEPARTMENT_ERROR",
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
