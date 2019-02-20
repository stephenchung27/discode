import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_USER,
} from '../actions/chat_channel_actions';

import { merge } from 'lodash';
import { RECEIVE_ALL_DMS, RECEIVE_DM } from '../actions/dms_actions';
import { RECEIVE_FRIEND_REQUEST, RECEIVE_FRIEND_REQUESTS, RECEIVE_FRIENDS } from '../actions/friend_actions';
import { UPDATE_SERVER_MEMBER } from '../actions/member_list_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
    case RECEIVE_FRIEND_REQUEST:
      return merge({}, oldState, { [action.user.id]: action.user });
    case UPDATE_SERVER_MEMBER:
      return merge({}, oldState, { [action.member.id]: action.member });
    case RECEIVE_ALL_DMS:
    case RECEIVE_DM:
    case RECEIVE_FRIENDS:
    case RECEIVE_FRIEND_REQUESTS:
      return merge({}, oldState, action.users);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default usersReducer;