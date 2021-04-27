import React, { Suspense } from "react";

import "../../sass/styles.scss";

import { useCurrentUserValue } from "../../context";
import Spinner from "../sharedComponents/Spinner/Spinner";
import NonAuthApp from "../NonAuthApp/NonAuthApp";
import AuthApp from "../AuthApp/AuthApp";

function Application() {
  const currentUser = useCurrentUserValue();

  return (
    <div className="">
      <Suspense fallback={<Spinner />}>
        {currentUser ? <AuthApp /> : <NonAuthApp />}
      </Suspense>
    </div>
  );
}

export default Application;
