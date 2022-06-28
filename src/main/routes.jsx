import React from "react";
import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router";
import App from "./app";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import dashboard from "../dashboard/dashboard";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={dashboard} />
      <Route path="billingCycles" component={BillingCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
