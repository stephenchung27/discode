import React from 'react';
import UserAvatar from '../../user_avatar';

const MemberListItem = ({ user }) => {
  return (
    <div className="member">
      <UserAvatar user={user} />
      <div className="member-username">{user.username}</div>
    </div>
  )
}

export default MemberListItem;