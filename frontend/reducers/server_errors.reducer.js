import {
  RECEIVE_SERVER_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SERVER_ERRORS,
} from '../actions/server_actions';

const serverErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_SERVER_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default serverErrorsReducer;