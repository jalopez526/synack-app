import { takeLatest, all } from "redux-saga/effects";
import { Actions as SearchActions } from "../Store/Search/Actions";
import {search} from "./Search/SearchSaga";

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts   
    takeLatest(SearchActions.SEARCH, search),
  ]);
}
