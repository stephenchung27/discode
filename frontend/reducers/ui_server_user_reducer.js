import { RECEIVE_CURRENT_SERVER_MEMBERS, RECEIVE_CURRENT_SERVER_MEMBER } from '../actions/chat_channel_actions';
import { merge } from 'lodash';

const uiServerUserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_SERVER_MEMBERS:
      return action.members;
    case RECEIVE_CURRENT_SERVER_MEMBER:
      return merge({}, oldState, { [action.member.id]: action.member });
    default:
      return oldState;
  }
};

export default uiServerUserReducer;