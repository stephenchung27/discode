import { RECEIVE_SERVER_CHAT_CHANNELS, RECEIVE_CHAT_CHANNEL } from "../actions/chat_channel_actions";
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

import { merge } from 'lodash'

const _nullChatChannels = Object.freeze({
  index: []
});

const chatChannelsReducer = (oldState = _nullChatChannels, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SERVER_CHAT_CHANNELS:
      return action.chatChannels;
    case RECEIVE_CHAT_CHANNEL:
      newState = merge({}, oldState, { [action.chatChannel.id]: action.chatChannel });
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullChatChannels;
    default:
      return oldState;
  }
};

export default chatChannelsReducer;