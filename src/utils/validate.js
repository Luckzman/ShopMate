import validator from 'validator';

const loginValidator = (user) => {
  const errors = {};

  if (validator.isEmpty(user.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(user.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } 
  return errors;
}

export { loginValidator };