import { combineReducers } from 'redux';
import loadingReducer from './loading_reducer';
import uiServerReducer from './ui_server_reducer';
import uiChannelReducer from './ui_channel_reducer';
import uiServerUserReducer from './ui_server_user_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  server: uiServerReducer,
  channel: uiChannelReducer,
  serverUsers: uiServerUserReducer,
});

export default uiReducer;