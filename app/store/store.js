import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import myReducer from '../reducers/myreducer';
import logger from 'redux-logger'

const rootReducer = combineReducers({
  articles: myReducer
});

const logger2 = applyMiddleware(logger)

const configureStore = () => {
  return createStore(rootReducer, logger2);
}

export default configureStore;