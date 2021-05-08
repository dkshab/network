import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth, signInWithGoogle } from "../../../../utilities/firebase";
import validateSignIn from "../../../../utilities/signInValidationRules";

import * as ROUTES from "../../../../constants/routes";

const initialState = { email: "", password: "", error: null, formErrors: {} };

const SignIn = () => {
  const history = useHistory();

  const [state, setState] = useState(initialState);

  const { formErrors } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;

    const errors = validateSignIn(state);

    setState({ ...state, formErrors: errors });

    if (Object.keys(errors).length === 0) {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          //console.log(response);
          clear();
        })
        .then(() => {
          history.push(ROUTES.HOME);
        })
        .catch((error) => {
          console.error(error);
          setState({ ...state, error: error });
        });
    }
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <div className="SignIn" data-testid="SignIn">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="item1" htmlFor="email">
            Email
          </label>
          <input
            className={`item2 ${formErrors.email && "is-danger"}`}
            type="email"
            id="email-signin"
            name="email"
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
            id="password-signin"
            name="password"
            aria-label="password"
            value={state.password}
            onChange={handleChange}
          />
          {formErrors.password && <p className="help">{formErrors.password}</p>}
        </div>
        <div className="pw-links">
          <p>
            <Link to={ROUTES.PASSWORD_FORGET}>Forgot password?</Link>
          </p>

          <p className="google-signin" onClick={signInWithGoogle}>
            <span className="fab fa-google"></span>
            Sign In With Google
          </p>
        </div>
        <div className="buttons">
          <button
            className="signin"
            aria-label="signin"
            data-testid="signin"
            name="signin"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      {state.error && <p className="help">{state.error.message}</p>}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default SignIn;
