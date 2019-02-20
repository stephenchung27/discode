import * as FriendsApiUtil from '../util/friends_api_utils';

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";

const receiveFriend = (friendId) => ({
  type: RECEIVE_FRIEND,
  friendId,
})

const receiveFriends = ({ friends, users }) => ({
  type: RECEIVE_FRIENDS,
  friends,
  users,
})

const receiveFriendRequest = ({ friend_id, user }) => ({
  type: RECEIVE_FRIEND_REQUEST,
  friendId: friend_id,
  user,
});

const receiveFriendRequests = ({ incoming, outgoing, users }) => ({
  type: RECEIVE_FRIEND_REQUESTS,
  incoming,
  outgoing,
  users,
});

const removeFriendRequest = (friendId) => ({
  type: REMOVE_FRIEND_REQUEST,
  friendId,
});

export const fetchFriends = () => dispatch => {
  return FriendsApiUtil.fetchFriends()
    .then(response => dispatch(receiveFriends(response)));
};

export const fetchFriendRequests = () => dispatch => {
  return FriendsApiUtil.fetchFriendRequests()
    .then(response => dispatch(receiveFriendRequests(response)));
};

export const sendFriendRequest = (friendId) => dispatch => {
  return FriendsApiUtil.sendFriendRequest(friendId)
    .then(response => dispatch(receiveFriendRequest(response)));
};

export const acceptFriendRequest = (friendId) => dispatch => {
  return FriendsApiUtil.acceptFriendRequest(friendId)
    .then(friendId => {
      dispatch(removeFriendRequest(friendId));
      dispatch(receiveFriend(friendId));
    });
};

export const rejectFriendRequest = (friendId) => dispatch => {
  return FriendsApiUtil.rejectFriendRequest(friendId)
    .then(friendId => dispatch(removeFriendRequest(friendId)));
};