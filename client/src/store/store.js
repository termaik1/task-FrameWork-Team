import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import Todo from './reducers';
import todoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const rootReducers = combineReducers({
  Todo,
});


const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(todoSagas);

export default store;
