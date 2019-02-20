import * as ChannelApiUtil from '../util/channel_api_utils';

export const RECEIVE_CHAT_CHANNEL = "RECEIVE_CHAT_CHANNEL";
export const RECEIVE_SERVER_CHAT_CHANNELS = "RECEIVE_SERVER_CHAT_CHANNELS";
export const RECEIVE_CURRENT_SERVER_MEMBERS = "RECEIVE_CURRENT_SERVER_MEMBERS";
export const RECEIVE_CURRENT_SERVER_MEMBER = "RECEIVE_CURRENT_SERVER_MEMBER";
export const RECEIVE_USER = "RECEIVE_USER";
export const CLEAR_CURRENT_CHANNEL = "CLEAR_CURRENT_CHANNEL";

const receiveChatChannel = chatChannel => ({
  type: RECEIVE_CHAT_CHANNEL,
  chatChannel,
});

const receiveServerChatChannels = ({ chatChannels, index, server }) => ({
  type: RECEIVE_SERVER_CHAT_CHANNELS,
  chatChannels,
  index,
  server,
});

const receiveCurrentServerMembers = ({ members }) => ({
  type: RECEIVE_CURRENT_SERVER_MEMBERS,
  members,
});

export const receiveCurrentServerMember = member => ({
  type: RECEIVE_CURRENT_SERVER_MEMBER,
  member,
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const clearCurrentChannel = () => ({
  type: CLEAR_CURRENT_CHANNEL,
})

export const fetchServerChatChannels = serverId => dispatch => {
  return ChannelApiUtil.fetchServerChatChannels(serverId)
    .then(chatChannels => dispatch(receiveServerChatChannels(chatChannels)));
};

export const createChatChannel = chatChannel => dispatch => {
  return ChannelApiUtil.createChatChannel(chatChannel)
    .then(chatChannel => dispatch(receiveChatChannel(chatChannel)));
};

export const fetchServerMembers = serverPath => dispatch => {
  return ChannelApiUtil.fetchServerMembers(serverPath)
    .then(members => dispatch(receiveCurrentServerMembers(members)));
};


export const fetchUser = user_id => dispatch => {
  return ChannelApiUtil.fetchUser(user_id)
    .then(user => dispatch(receiveUser(user)));
};