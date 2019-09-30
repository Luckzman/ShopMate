export const setToken = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const getUser = JSON.parse(localStorage.getItem('user'));

export const configUser = (getUser) => {
  if(getUser) {
    return {headers: { 'user-key': getUser.accessToken}}
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  window.location.reload();
}