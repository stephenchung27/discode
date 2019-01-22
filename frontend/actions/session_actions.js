import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const register = (user) => {
  return SessionApiUtil.register(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const login = (user) => {
  return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => {
  return SessionApiUtil.logout()
    .then(user => dispatch(logoutCurrentUser(user)));
};