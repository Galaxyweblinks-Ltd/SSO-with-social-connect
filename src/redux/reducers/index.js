import { combineReducers } from 'redux';
import auth from './authReducer';

/**
 * Root Reducer
 * Combines all individual reducers into one rootReducer.
 * Each key in the combined state corresponds to a reducer.
 */

const rootReducer = combineReducers({
  auth,
});

// Exporting the rootReducer as the default export
export default rootReducer;
