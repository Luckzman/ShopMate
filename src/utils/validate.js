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

const signupValidator = (user) => {
  const errors = {};

  if (validator.isEmpty(user.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(user.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (validator.isEmpty(user.name)) {
    errors.name = 'Name field is required';
  } 
  if (validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } 
  if (validator.isEmpty(user.repeatPassword)) {
    errors.repeatPassword = 'Repeat Password field is required';
  }
  if (user.password !== user.repeatPassword){
    errors.repeatPassword = 'Password does not match with Repeat Pasword';
    errors.password = 'Password does not match with Repeat Pasword';
  }
  return errors;
}
const userProfileValidator = (user) => {
  const errors = {};

  if (validator.isEmpty(user.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(user.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (validator.isEmpty(user.name)) {
    errors.name = 'Name field is required';
  } 
  return errors;
}

const shippingDetailsValidator = (user) => {
  const errors = {};

  if (validator.isEmpty(user.address_1)) {
    errors.address_1 = 'Address is required';
  }
  if (validator.isEmpty(user.city)) {
    errors.city = 'City is required';
  }
  if (validator.isEmpty(user.region)) {
    errors.region = 'Select a region';
  }
  if (validator.isEmpty(user.postal_code)) {
    errors.postal_code = 'Postal Code is Required';
  }
  if (validator.isEmpty(user.country)) {
    errors.country = 'Country is Required';
  }
  if (validator.isEmpty(user.shipping_region_id)) {
    errors.shipping_region_id = 'Select a Shipping Region Id';
  }
  return errors;
}



export {
  loginValidator,
  signupValidator,
  userProfileValidator,
  shippingDetailsValidator,
};