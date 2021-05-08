import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  query: "",
};
const HomeNonAuth = () => {
  const history = useHistory();
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { query } = state;

    if (!query) {
      console.log("let's be serious");
    } else {
      history.push({
        pathname: `search/${query}`,
      });
    }
  };

  return (
    <div className="Home">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="" className="item1">
            Search
          </label>
          <input
            type="text"
            className="item2"
            name="query"
            value={state.query}
            onChange={handleChange}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default HomeNonAuth;
