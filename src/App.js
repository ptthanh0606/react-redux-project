import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path="/"
          component={React.lazy(() => import("./views/Home"))}
        />
        <Route component={React.lazy(() => import("./views/Error"))} />
      </Switch>
    </React.Suspense>
  );
}

export default App;
