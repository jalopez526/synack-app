/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { createReducer } from "reduxsauce";
import INITIAL_STATE from "./InitialState";
import { Actions } from "./Actions";

export const loading = state => ({
  ...state,
  isLoading: true,
  error: null
});

export const done = (state, { data }) => ({
  ...state,
  isLoading: false,
  data,
  error: null
});

export const failure = (state, { errorMessage }) => ({
  ...state,
  data: INITIAL_STATE.data,
  isLoading: false,
  error: errorMessage
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Actions.SEARCH_DONE]: done,
  [Actions.SEARCH_LOADING]: loading,
  [Actions.SEARCH_ERROR]: failure
});
