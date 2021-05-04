import React from "react";

const HomeAuth = () => {
  return (
    <div className="Home">
      <div className="Home__hero">
        <div className="Home__hero__content">
          <p>all the fun starts here</p>
          <h2>Discover</h2>
          <h2>
            <span>Workshops</span> around you.
          </h2>
        </div>
        <form action="" className="Home__hero__form">
          <div className="Home__hero__form__field">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="Home__hero__form__field">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="Home__hero__form__buttons">
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeAuth;
