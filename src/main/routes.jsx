import React from "react";
import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router";

import BillingCycle from "../billingCycle/billingCycle";
import dashboard from "../dashboard/dashboard";
import AuthOrApp from "./authOrApp";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={dashboard} />
      <Route path="billingCycles" component={BillingCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
