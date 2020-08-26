import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../redux/combineReducer'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);


const store = createStore(
  rootReducer,
  enhancer
)

export default store;