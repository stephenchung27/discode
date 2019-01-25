import {
  RECEIVE_SERVER_CHAT_CHANNELS,
} from "../actions/chat_channel_actions";
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullChatChannels = Object.freeze({
  index: []
});

const chatChannelsReducer = (oldState = _nullChatChannels, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SERVER_CHAT_CHANNELS:
      return action.chatChannels;
    case LOGOUT_CURRENT_USER:
      return _nullChatChannels;
    default:
      return oldState;
  }
};

export default chatChannelsReducer;