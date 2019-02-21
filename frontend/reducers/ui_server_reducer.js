import { RECEIVE_SERVER, RECEIVE_SERVERS } from '../actions/server_actions';
import { RECEIVE_SERVER_CHAT_CHANNELS } from '../actions/chat_channel_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullServer = {
  index: [],
};

const uiServerReducer = (oldState = _nullServer, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_SERVERS:
      return merge({}, oldState, { index: action.server_index});
    case RECEIVE_SERVER:
      newState = merge({}, oldState, {
        id: action.server.id,
        path: action.server.path,
        name: action.server.server_name,
        admin: action.server.admin_id,
      });
      newState["index"].push(action.server.id);
      return newState;
    case RECEIVE_SERVER_CHAT_CHANNELS:
      newState = merge({}, oldState, {
        id: action.server.id,
        path: action.server.path,
        name: action.server.server_name,
        admin_id: action.server.admin_id,
      });
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullServer;
    default:
      return oldState;
  }
};

export default uiServerReducer;