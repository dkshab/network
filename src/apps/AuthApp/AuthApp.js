import React from "react";
import { Route, Switch } from "react-router";

import * as ROUTES from "../../constants/routes";

import TestingComponent from "../sharedComponents/TestingComponent/TestingComponent";
import HomeAuth from "./static/HomeAuth/HomeAuth";
import HeaderAuth from "./static/HeaderAuth/HeaderAuth";
import NavBarAuth from "./static/NavBarAuth/NavBarAuth";

const AuthApp = () => {
  return (
    <div className="AuthApp">
      <HeaderAuth />
      <NavBarAuth />

      <main className="">
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomeAuth} />{" "}
          <Route path={ROUTES.TESTING} component={TestingComponent} />
        </Switch>
      </main>
    </div>
  );
};

export default AuthApp;
