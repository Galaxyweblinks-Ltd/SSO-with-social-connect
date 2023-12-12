import { authConstants } from '../constants';

// Action creator for successful user login
export const loginSuccess = (user) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: user,
  };
};

// Action creator for handling login failure
export const loginFailure = (error) => ({
  type: authConstants.LOGIN_FAILURE,
  payload: error,
});

// Action creator for successful user logout
export const logoutSuccess = () => ({
  type: authConstants.LOGOUT_SUCCESS,
  payload: {},
});
