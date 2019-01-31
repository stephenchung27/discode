import { RECEIVE_CURRENT_SERVER_MEMBERS } from '../actions/chat_channel_actions';

const uiServerUserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_SERVER_MEMBERS:
      return action.members;
    default:
      return oldState;
  }
};

export default uiServerUserReducer;