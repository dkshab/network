import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../../../constants/routes";

const NavBarNonAuth = () => {
  return (
    <div className="NavBar">
      <a href="#main-menu" className="menu-toggle" aria-label="Open main menu">
        <span className="sr-only">Open main menu</span>
        <span className="fa fa-bars" aria-hidden="true"></span>
      </a>
      <h1 className="logo">
        <Link to={ROUTES.HOME}>Network</Link>
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
            <Link to={ROUTES.TESTING}>Testing</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.SEARCH}>Search</Link>
          </li>
          <li>
            <Link to={ROUTES.NEWS}>News</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Packages</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Network</Link>
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

export default NavBarNonAuth;
