import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../../../../utilities/firebase";
import validateSignUp from "../../../../utilities/signUpValidationRules";

import * as ROUTES from "../../../../constants/routes";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
  formErrors: {},
};

const SignUp = () => {
  const history = useHistory();

  const [state, setState] = useState(initialState);

  const { formErrors } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    const errors = validateSignUp(state);

    setState({ ...state, formErrors: errors });

    if (Object.keys(errors).length === 0) {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        clear();
        history.push(ROUTES.HOME);
      } catch (error) {
        console.error(error);
        setState({ ...state, error: error });
      }
    }
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <div className="SignUp" data-testid="SignUp">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="item1" htmlFor="email">
            Email
          </label>
          <input
            className={`item2 ${formErrors.email && "is-danger"}`}
            type="email"
            name="email"
            id="email"
            aria-label="email"
            value={state.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="help">{formErrors.email}</p>}
        </div>
        <div className="field">
          <label className="item1" htmlFor="password">
            Password
          </label>
          <input
            className={`item2 ${formErrors.password && "is-danger"}`}
            type="password"
            name="password"
            id="password"
            aria-label="password"
            value={state.password}
            onChange={handleChange}
          />
          {formErrors.password && <p className="help">{formErrors.password}</p>}
        </div>
        <div className="field">
          <label className="item1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={`item2 ${formErrors.confirmPassword && "is-danger"}`}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            aria-label="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && (
            <p className="help">{formErrors.confirmPassword}</p>
          )}
        </div>
        <div className="buttons">
          <button className="signup" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      {state.error && <p className="help">{state.error.message}</p>}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default SignUp;
