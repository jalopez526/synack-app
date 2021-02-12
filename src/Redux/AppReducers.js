import { combineReducers } from "redux";
import { reducer as SearchReducer } from "./Store/Search/Reducers";

const reducers = combineReducers({
  search: SearchReducer,
});

export default reducers;
