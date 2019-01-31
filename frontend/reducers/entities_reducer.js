import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import chatChannelsReducer from './chat_channels_reducer';
import channelMessagesReducer from './channel_messages_reducer';
import directMessagesReducer from './direct_messages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  chatChannels: chatChannelsReducer,
  channelMessages: channelMessagesReducer,
  dmChannels: directMessagesReducer,
});

export default entitiesReducer;