import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import DashboardReducer from "../dashboard/dashboardReducer";
import tabReducer from "../common/tab/tabReducer";
import BillingCycleReduce from "../billingCycle/billingCycleReduce";
import { ReduxToastr } from "react-redux-toastr";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
  billingCycle: BillingCycleReduce,
  form: formReducer,
  toastr: toastrReducer,
});

export default rootReducer;
