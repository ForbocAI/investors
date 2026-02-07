/**
 * Root Reducer
 */
import { combineReducers } from './store.js';
import { navigationReducer } from './navigationSlice.js';

export const rootReducer = combineReducers({
    navigation: navigationReducer
});
