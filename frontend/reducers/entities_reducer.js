import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import chatChannelsReducer from './chat_channels_reducer';
import channelMessagesReducer from './channel_messages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  chatChannels: chatChannelsReducer,
  channelMessages: channelMessagesReducer,
});

export default entitiesReducer;