import { combineReducers } from "redux";
import serviceReducer from "./ServiceReducer";

const reducers = combineReducers({
  service: serviceReducer,
});

export default reducers;
