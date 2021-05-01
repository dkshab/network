import React, { useState } from "react";
import { firestore } from "../../../utilities/firebase";

const initialState = {
  name: "",
  lat: "",
  lng: "",
  error: null,
};

const TestingComponent = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, lat, lng } = state;

    if (!name || !lat || !lng) {
      console.log("empty content!");
    } else {
      const business = {
        name,
        lat,
        lng,
        createdAt: new Date(),
      };

      await firestore
        .collection("companies")
        .add(business)
        .then(() => {
          clear();
        })
        .catch((error) => {
          setState({ ...state, error: error });
          console.error(error);
        });
    }

    clear();
  };

  const clear = () => {
    setState(initialState);
  };
  return (
    <div className="TestingComponent">
      <h2>Adding Places</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="" className="item1">
            Name
          </label>
          <input
            type="text"
            className="item2"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="" className="item1">
            Latitude
          </label>
          <input
            type="text"
            className="item2"
            name="lat"
            value={state.lat}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="" className="item1">
            Longitude
          </label>
          <input
            type="text"
            className="item2"
            name="lng"
            value={state.lng}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button>Submit</button>
        </div>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default TestingComponent;
