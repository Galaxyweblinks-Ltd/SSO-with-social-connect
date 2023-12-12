import { authConstants } from '../constants';
import initialState from './initialState';

// Extracting specific constants from authConstants
const { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } = authConstants;

/**
 * Auth Reducer
 * Manages the state related to user authentication.
 * @param {Object} state - Current state of the authentication.
 * @param {Object} action - Dispatched action with a type and payload.
 * @returns {Object} - New state based on the action type.
 */

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    // Case for indicating login is in progress
    case LOGIN_LOADING:
      return {
        ...state,
        loggedIn: false,
        loading: true,
      };
    // Case for handling login failure
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        userInfo: {},
      };
    // Case for handling successful login
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        userInfo: action.payload,
      };
    // Case for handling successful logout
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        userInfo: {},
        errors: action.payload,
      };
  
    default:
      return state;
  }
};

// Exporting the authReducer as the default export
export default authReducer;
