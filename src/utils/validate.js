//writing all the validations here
export const validateSignInForm = (email, password) => {
  //anything@anything.anything
  const isEmailValid = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
  //one Uppercase, one special character and minimum 8 characters long
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!isEmailValid) return "Email not valid!";
  if (!isPasswordValid) return "Password not Valid";
  return null;
};

export const validateSignUpForm = () => {};
