import { 
  RECEIVE_FRIEND,
  RECEIVE_FRIENDS,
  RECEIVE_FRIEND_REQUEST,
  RECEIVE_FRIEND_REQUESTS,
  REMOVE_FRIEND_REQUEST,
} from '../actions/friend_actions';

import { merge } from 'lodash';

const _nullState = {
  list: [],
  incoming: [],
  outgoing: [],
}

const friendsReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);

  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_FRIEND:
      newState["list"] = newState["list"].concat(action.friendId);
      return newState;
    case RECEIVE_FRIENDS:
      newState["list"] = action.friends;
      return newState;
    case RECEIVE_FRIEND_REQUEST:
      newState["outgoing"] = newState["outgoing"].concat(action.friendId);
      return newState;
    case RECEIVE_FRIEND_REQUESTS:
      newState["outgoing"] = action.outgoing;
      newState["incoming"] = action.incoming;
      return newState;
    case REMOVE_FRIEND_REQUEST:
      newState["incoming"] = newState["incoming"] = newState["incoming"].filter((id) => {
        return id !== action.friendId;
      });
      return newState;
    default:
      return oldState;
  }
}

export default friendsReducer;