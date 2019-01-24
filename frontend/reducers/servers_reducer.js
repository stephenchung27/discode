import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import { RECEIVE_SERVER } from '../actions/server_actions';

import { merge } from 'lodash';

const serversReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, action.servers);
      // We do NOT merge oldState so that whenever a user logs in, 
      // we will have ONLY that user's servers
    case RECEIVE_SERVER:
      return merge({}, oldState, {[action.server.id]: action.server});
    case LOGOUT_CURRENT_USER:
      return {};
      // Once someone logs out, the servers will not persist
    default:
      return oldState;
  }
};
export default serversReducer;