import React from 'react';
import UserAvatar from '../../user_avatar';

const FriendListItem = ({ user }) => {
  return (
    <div className="friend">
      {/* <div className="friend-avatar"></div> */}
      <UserAvatar user={user} />
      <div className="friend-username">{user.username}</div>
    </div>
  )
}

export default FriendListItem;