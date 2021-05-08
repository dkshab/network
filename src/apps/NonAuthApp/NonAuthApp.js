import React from "react";
import { Route, Switch } from "react-router";

import * as ROUTES from "../../constants/routes";
import News from "../sharedComponents/News/News";
import Search from "../sharedComponents/search/Search";
import TestingComponent from "../sharedComponents/TestingComponent/TestingComponent";
import SignInAndSignUp from "./interaction/SignInAndSignUp/SignInAndSignUp";

import FooterNonAuth from "./static/FooterNonAuth/FooterNonAuth";

import HeaderNonAuth from "./static/HeaderNonAuth/HeaderNonAuth";
import HomeNonAuth from "./static/HomeNonAuth/HomeNonAuth";
import NavBarNonAuth from "./static/NavBarNonAuth/NavBarNonAuth";

const NonAuthApp = () => {
  return (
    <div className="NonAuthApp">
      <HeaderNonAuth />
      <NavBarNonAuth />
      <main className="">
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomeNonAuth} />
          <Route path={ROUTES.SIGNIN} component={SignInAndSignUp} />
          <Route path={ROUTES.TESTING} component={TestingComponent} />
          <Route path={ROUTES.SEARCH} component={Search} />
          <Route path={ROUTES.NEWS} component={News} />
        </Switch>
      </main>
      <footer>
        <FooterNonAuth />
      </footer>
    </div>
  );
};

export default NonAuthApp;
