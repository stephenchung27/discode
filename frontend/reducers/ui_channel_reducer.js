import {
  RECEIVE_SERVER_CHAT_CHANNELS,
  RECEIVE_CHAT_CHANNEL,
  CLEAR_CURRENT_CHANNEL
} from "../actions/chat_channel_actions";
import { RECEIVE_CHANNEL_MESSAGES } from "../actions/channel_message_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { merge } from "lodash";
import { RECEIVE_DM } from "../actions/dms_actions";

const _nullChannel = {
  index: []
};

const uiChannelReducer = (oldState = _nullChannel, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SERVER_CHAT_CHANNELS:
      return merge({}, oldState, { index: action.index });
    case RECEIVE_CHAT_CHANNEL:
      newState = merge({}, oldState, {
        id: action.chatChannel.id,
        path: action.chatChannel.path,
        name: action.chatChannel.channel_name
      });
      newState.index.push(action.chatChannel.id);
      return newState;
    case RECEIVE_CHANNEL_MESSAGES:
      newState = merge({}, oldState, {
        id: action.chatChannel.id,
        path: action.chatChannel.path,
        name: action.chatChannel.channel_name
      });
      return newState;
    case RECEIVE_DM:
      const chatChannel = Object.values(action.chat_channel)[0];
      newState = merge({}, oldState, {
        id: chatChannel.id,
        path: chatChannel.path,
        name: chatChannel.username,
      });
      return newState;
    case CLEAR_CURRENT_CHANNEL:
    case LOGOUT_CURRENT_USER:
      return _nullChannel;
    default:
      return oldState;
  }
};

export default uiChannelReducer;
