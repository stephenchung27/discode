import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const RECEIVE_USER = 'RECEIVE_USER';
export const DELETE_USER = 'DELETE_USER';

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

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const register = (user) => dispatch => {
  return SessionApiUtil.register(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));
};

export const updateUser = (userId, user) => dispatch => {
  return SessionApiUtil.updateUser(userId, user)
    .then(user => dispatch(receiveCurrentUser(user)));
}

export const deleteUser = (userId) => dispatch => {
  return SessionApiUtil.deleteUser(userId)
    .then(() => dispatch(logoutCurrentUser()));
}