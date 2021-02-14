import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppReducer from './RootReducers';
import Sagas from './RootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(Sagas);
export default store;
