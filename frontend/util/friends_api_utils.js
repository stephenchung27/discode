export const fetchFriends = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/friends',
  });
};

export const fetchFriendRequests = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/friend_requests',
  });
};

export const sendFriendRequest = (friendId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/friend_requests',
    data: {
      friend_id: friendId,
    }
  });
};

export const acceptFriendRequest = (friendId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/friend_requests/${friendId}`,
  });
};

export const rejectFriendRequest = (friendId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/friend_requests/${friendId}`
  });
};