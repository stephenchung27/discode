import { ENTER_SERVER } from '../actions/server_actions';

const _nullServer = Object.freeze({
  id: "@me",
});

const ServerUiReducer = (oldState = _nullServer, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case ENTER_SERVER:
      return { id: action.serverId };
    default:
      return oldState;
  }
};

export default ServerUiReducer;