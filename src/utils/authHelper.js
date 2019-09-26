import jwtDecode from 'jwt-decode';

export const setToken = (token) => {
  return localStorage.setItem('user-key', token);
}

export const getToken = localStorage.getItem('user-key');

export const config = {
  headers: { 'user-key': getToken }
};

export const getUserIdFromLocalStorage = () => {
  const token = getToken;
  try {
    const payLoad = jwtDecode(token);
    console.log(payLoad);
    return payLoad;
  } catch (error) {
    return null;
  }
};

