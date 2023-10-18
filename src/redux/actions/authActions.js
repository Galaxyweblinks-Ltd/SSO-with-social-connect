import { authConstants } from '../constants';

export const loginSuccess = (user) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => ({
  type: authConstants.LOGIN_FAILURE,
  payload: error,
});

export const logoutSuccess = () => ({
  type: authConstants.LOGOUT_SUCCESS,
  payload: {},
});
