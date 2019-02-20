import React from 'react';
import UserAvatar from '../../user_avatar';

const FriendItem = ({ friend }) => {

  const status = friend.online ? "Online" : "Offline";

  return (
    <div className="friends-item">
      <div className="friend-info">
        <div className="friends-item-name">
          <UserAvatar user={friend} />
          <p>{friend.username}<span>#{friend.discriminator}</span></p>
        </div>
        <div className="friends-item-online">
          <div className={"online-status " + (friend.online ? "online" : "offline")}></div>
          <span>{status}</span>
        </div>
      </div>
      <div className="friend-buttons">

      </div>
    </div>
  )
}

export default FriendItem;