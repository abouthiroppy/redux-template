import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware
    )
  );
};
