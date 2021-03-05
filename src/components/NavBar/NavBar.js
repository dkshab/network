import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const NavBar = () => {
  return (
    <div className="NavBar">
      <a href="#main-menu" className="menu-toggle" aria-label="Open main menu">
        <span className="sr-only">Open main menu</span>
        <span className="fa fa-bars" aria-hidden="true"></span>
      </a>
      <h1 className="logo">
        <Link to={ROUTES.HOME}>hamburgers</Link>
      </h1>
      <nav id="main-menu" className="main-menu">
        <a
          href="#main-menu-toggle"
          className="menu-close"
          aria-label="Close main menu"
        >
          <span className="sr-only">Close main menu</span>
          <span className="fa fa-close" aria-hidden="true"></span>
        </a>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Products</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Contact</Link>
          </li>
        </ul>
      </nav>
      {/* eslint-disable-next-line */}
      <a
        href="#main-menu-toggle"
        className="backdrop"
        tabIndex="-1"
        aria-hidden="true"
        hidden
      ></a>
    </div>
  );
};

export default NavBar;
