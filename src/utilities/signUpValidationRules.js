export default function validateSignUp(state) {
  let errors = {};
  const { email, password, confirmPassword } = state;
  if (!email) {
    errors.email = "Email address is required";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Passwords should be longer than 6 characters";
  }
  if (!confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (confirmPassword.length < 6) {
    errors.confirmPassword = "Passwords should be longer than 6 characters";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }
  return errors;
}
