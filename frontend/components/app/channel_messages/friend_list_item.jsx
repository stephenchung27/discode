import React from 'react';

const FriendListItem = ({ user }) => {
  return (
    <div className="friend">
      <div className="friend-avatar"></div>
      <div className="friend-username">{user.username}</div>
    </div>
  )
}

export default FriendListItem;