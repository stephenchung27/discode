import React from 'react';
import UserAvatar from '../../user_avatar';

const FriendRequest = ({
  friend,
  status,
  acceptFriendRequest,
  rejectFriendRequest,
}) => {
  return <div className="friends-item">
    <div className="friend-info">
      <div className="friends-item-name">
        <UserAvatar user={friend} hiddenStatus={true} />
        <p>{friend.username}<span>#{friend.discriminator}</span></p>
      </div>
      <div className="friends-item-online">
        <div className={"online-status " + (friend.online ? "online" : "offline")}></div>
        <span>{status}</span>
      </div>
    </div>
    {acceptFriendRequest ?
      <div className="friend-buttons">
        <button className="accept" onClick={() => acceptFriendRequest(friend.id)}></button>
        <button className="reject" onClick={() => rejectFriendRequest(friend.id)}></button>
      </div>
      : null}
  </div>
}

export default FriendRequest;