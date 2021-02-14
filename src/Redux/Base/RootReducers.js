import { combineReducers } from "redux";
import { reducer as SearchReducer } from "../Modules/Search/Reducers";

const reducers = combineReducers({
  search: SearchReducer,
});

export default reducers;
