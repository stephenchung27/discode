import { combineReducers } from 'redux';

import ServerUiReducer from './server_ui_reducer';

const uiReducer = combineReducers({
  server: ServerUiReducer,
});

export default uiReducer;