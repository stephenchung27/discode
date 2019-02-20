import { RECEIVE_SERVER_MEMBER, UPDATE_SERVER_MEMBER, RECEIVE_SERVER_MEMBERS } from '../actions/member_list_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const uiServerUserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SERVER_MEMBERS:
      return action.members;
    case UPDATE_SERVER_MEMBER:
    // Check if oldState has the member already
    // Only if it exists, update the member's online status
      if (oldState[action.member.id]) {
        return merge({}, oldState, { [action.member.id]: action.member });
      } else {
        return oldState;
      }
    case RECEIVE_SERVER_MEMBER:
      return merge({}, oldState, {[action.member.id]: action.member});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default uiServerUserReducer;