import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";

const Home = () => {
  return (
    <>
      <HeaderNav />
      <Switch>
        <Route
          exact
          path="/tasks"
          component={React.lazy(() => import("../TaskPage"))}
        />
      </Switch>
    </>
  );
};

export default React.memo(Home);
