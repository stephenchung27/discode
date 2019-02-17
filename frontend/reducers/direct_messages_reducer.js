import { RECEIVE_ALL_DMS, RECEIVE_DM, REMOVE_DM } from '../actions/dms_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const directMessagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_DMS:
      return action.chat_channels || {};
    case RECEIVE_DM:
      return merge({}, oldState, action.chat_channel);
    case REMOVE_DM:
      newState = merge({}, oldState);
      delete newState[action.dmID.toString()];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default directMessagesReducer;