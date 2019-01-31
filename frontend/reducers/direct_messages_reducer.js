import { RECEIVE_ALL_DMS, RECEIVE_DM } from '../actions/dms_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const directMessagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_DMS:
      return action.chat_channels || {};
    case RECEIVE_DM:
      return merge({}, oldState, action.chat_channel);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default directMessagesReducer;