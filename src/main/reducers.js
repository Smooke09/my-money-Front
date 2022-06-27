import { combineReducers } from "redux";
import DashboardReducer from "../dashboard/dashboardReducer";
import tabReducer from "../common/tab/tabReducer";
import BillingCycleReduce from "../billingCycle/billingCycleReduce";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
  billingCycle: BillingCycleReduce,
});

export default rootReducer;
