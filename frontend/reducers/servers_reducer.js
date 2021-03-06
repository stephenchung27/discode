import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_SERVER, RECEIVE_SERVERS } from '../actions/server_actions';

import { merge } from 'lodash';

const serversReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SERVERS:
      return merge({}, oldState, action.servers);
    // We do NOT merge oldState so that whenever a user logs in, 
    // we will have ONLY that user's servers
    case RECEIVE_SERVER:
      newState = merge({}, oldState, { [action.server.id]: action.server });
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    // Once someone logs out, the servers will not persist
    default:
      return oldState;
  }
};
export default serversReducer;