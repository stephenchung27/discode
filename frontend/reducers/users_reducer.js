import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_SERVER_MEMBERS,
  RECEIVE_USER,
} from '../actions/chat_channel_actions';

import { merge } from 'lodash';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_SERVER_MEMBERS:
      return merge({}, oldState, action.members);
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default usersReducer;