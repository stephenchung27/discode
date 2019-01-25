import {
  RECEIVE_SERVER_CHAT_CHANNELS,
} from "../actions/chat_channel_actions";

import { merge } from 'lodash';

const _nullChatChannels = Object.freeze({
  index: []
});

const chatChannelsReducer = (oldState = _nullChatChannels, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SERVER_CHAT_CHANNELS:
      return action.chatChannels;
    default:
      return oldState;
  }
};

export default chatChannelsReducer;