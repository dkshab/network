import React from "react";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar__logo">
        <h2>Network</h2>
      </div>
      <ul className="NavBar__menu">
        <li className="NavBar__menu__item">Home</li>
        <li className="NavBar__menu__item">Directory</li>
        <li className="NavBar__menu__item">Contact</li>
        <li className="NavBar__menu__item">Sign In</li>
      </ul>
    </div>
  );
};

export default NavBar;
