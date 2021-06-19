import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => "yo"} />
      </Switch>
    </BrowserRouter>
  );
};
