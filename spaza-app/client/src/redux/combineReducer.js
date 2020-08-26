
import { combineReducers } from 'redux';
import shoppingReducer from './shoppingReducer';

export const rootReducer = combineReducers({
    shopping: shoppingReducer,
})  