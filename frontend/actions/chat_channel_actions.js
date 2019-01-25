import * as ChannelApiUtil from '../util/channel_api_utils';

export const RECEIVE_CHAT_CHANNEL = "RECEIVE_CHAT_CHANNEL";
export const RECEIVE_SERVER_CHAT_CHANNELS = "RECEIVE_SERVER_CHAT_CHANNELS";

const receiveChatChannel = chatChannel => ({
  type: RECEIVE_CHAT_CHANNEL,
  chatChannel
});

const receiveServerChatChannels = chatChannels => ({
  type: RECEIVE_SERVER_CHAT_CHANNELS,
  chatChannels
});

export const fetchServerChatChannels = serverId => dispatch => {
  return ChannelApiUtil.fetchServerChatChannels(serverId)
    .then(chatChannels => dispatch(receiveServerChatChannels(chatChannels)));
};

export const createChatChannel = chatChannel => dispatch => {
  return ChannelApiUtil.createChatChannel(chatChannel)
  .then(chatChannel => dispatch(receiveChatChannel(chatChannel)));
};