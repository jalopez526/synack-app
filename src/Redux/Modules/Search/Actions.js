import { createActions } from "reduxsauce";

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state.
 * - to trigger sagas.
 *
 * Actions can be dispatched:
 *
 * - in React component using `dispatch(...)`
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  searchGoogle: ["payload"],
  searchBing: ["payload"],
  searchAllEngines: ["payload"],
  searchDone: ["data"],
  searchLoading: null,
  searchError: ["errorMessage"],
});

export const Actions = Types;
export default Creators;
