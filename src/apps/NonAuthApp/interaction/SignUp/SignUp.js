import React from "react";

const SignUp = () => {
  return (
    <div className="SignUp" data-testid="SignUp">
      <form>
        <div className="field">
          <label className="item1" htmlFor="email">
            Email
          </label>
          <input
            className=""
            type="email"
            name="email"
            id="email"
            aria-label="email"
          />
        </div>
        <div className="field">
          <label className="item1" htmlFor="password">
            Password
          </label>
          <input
            className=""
            type="password"
            name="password"
            id="password"
            aria-label="password"
          />
        </div>
        <div className="field">
          <label className="item1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className=""
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            aria-label="confirmPassword"
          />
        </div>
        <div className="buttons">
          <button className="signup" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
