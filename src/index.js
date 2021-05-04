import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Application from "./apps/Application/Application";
import { CurrentUserProvider } from "./context";

ReactDOM.render(
  <Router>
    <CurrentUserProvider>
      <Application />
    </CurrentUserProvider>
  </Router>,
  document.getElementById("root")
);
