import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const serversReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.servers;
      // We do NOT merge so that whenever a user logs in, 
      // we will have ONLY that user's servers
    case LOGOUT_CURRENT_USER:
      return {};
      // Once someone logs out, the servers will not persist
    default:
      return oldState;
  }
}

export default serversReducer;