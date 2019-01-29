import * as ChannelMessageApiUtil from "../util/channel_message_api_utils";

export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";
export const RECEIVE_CHANNEL_MESSAGE = "RECEIVE_CHANNEL_MESSAGE";

const receiveChannelMessages = ({ channel_messages, chat_channel }) => ({
  type: RECEIVE_CHANNEL_MESSAGES,
  channelMessages: channel_messages,
  chatChannel: chat_channel,
});

export const receiveChannelMessage = channelMessage => ({
  type: RECEIVE_CHANNEL_MESSAGE,
  channelMessage
});

export const fetchChannelMessages = serverPath => dispatch => {
  return ChannelMessageApiUtil.fetchChannelMessages(serverPath).then(
    channelMessages => dispatch(receiveChannelMessages(channelMessages))
  );
};

export const createChannelMessage = channelMessage => dispatch => {
  return ChannelMessageApiUtil.createChannelMessage(channelMessage).then(
    channelMessage => dispatch(receiveChannelMessage(channelMessage))
  );
};
