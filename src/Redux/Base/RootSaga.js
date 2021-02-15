import { takeLatest, all } from "redux-saga/effects";
import { Actions as SearchActions } from "../Modules/Search/Actions";
import { searchGoogle, searchBing, searchAllEngines } from "../Modules/Search/Saga";

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(SearchActions.SEARCH_GOOGLE, searchGoogle),
    takeLatest(SearchActions.SEARCH_BING, searchBing),
    takeLatest(SearchActions.SEARCH_ALL_ENGINES, searchAllEngines),
  ]);
}
