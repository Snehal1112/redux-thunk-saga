import {createLogger} from "redux-logger";
import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";



import appReducer from "../reducers";
import {fetchCharacters} from "../actions/characters";


const logger = createLogger({
  collapsed: true,
  duration: true
});

const sagaMiddleware = createSagaMiddleware()


const app = combineReducers({appReducer});

const store = createStore(
  app,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(fetchCharacters);

export default store;
