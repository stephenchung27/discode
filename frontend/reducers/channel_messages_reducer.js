import { RECEIVE_CHANNEL_MESSAGES, RECEIVE_CHANNEL_MESSAGE } from '../actions/channel_message_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';

const channelMessagesReducer = (oldState = null, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CHANNEL_MESSAGES:
      return action.channelMessages || {};
    case RECEIVE_CHANNEL_MESSAGE:
      return merge({}, oldState, {[action.channelMessage.id]: action.channelMessage});
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return oldState;
  }
}

export default channelMessagesReducer;