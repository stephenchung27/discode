import React from 'react';
import UserAvatar from '../../user_avatar';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createDM } from '../../../actions/dms_actions';

const FriendRequest = ({
  friend,
  status,
  acceptFriendRequest,
  rejectFriendRequest,
  createDM,
  history,
}) => {
  const gotoDM = () => {
    createDM(friend.id).then(action => {
      const channel = Object.values(action.chat_channel)[0];

      history.push(`/channels/@me/${channel.path}`);
    });
  }

  return <div className="friends-item" onClick={gotoDM}>
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
        <button className="accept" onClick={(e) => {
          e.stopPropagation();
          acceptFriendRequest(friend.id);
        }}></button>
        <button className="reject" onClick={(e) => {
          e.stopPropagation();
          rejectFriendRequest(friend.id);
        }}></button>
      </div>
      : null}
  </div>
}

const mapDispatchToProps = dispatch => ({
  createDM: (friendId) => dispatch(createDM(friendId)),
})

export default withRouter(connect(null, mapDispatchToProps)(FriendRequest));