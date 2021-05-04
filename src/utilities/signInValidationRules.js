export default function validateSignIn(state) {
  let errors = {};

  const { email, password } = state;
  if (!email) {
    errors.email = "Email address is required";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Passwords should be longer than 6 characters";
  }
  return errors;
}
