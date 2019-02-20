import React from 'react';
import UserAvatar from '../../user_avatar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendFriendRequest } from '../../../actions/friend_actions';


const SearchResult = ({ user, selected, onClick, sendFriendRequest, history }) => {
  const handleFriendRequestClick = (e) => {
    e.stopPropagation();
    sendFriendRequest(user.id);
    history.push({
      pathname: '/channels/@me',
      state: { viewType: "Pending" }
    })
  }

  return (
    <li className={"search-result-item " + (selected ? "selected" : "")} onMouseDown={onClick}>
      <UserAvatar user={user} hiddenStatus={true} />
      <p><span>{user.username}</span>#{user.discriminator}</p>
      <div className="buttons">
        <svg width="18" height="18" viewBox="0 0 18 18" onMouseDown={handleFriendRequestClick}>
          <polygon fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8" />
        </svg>
        <div className="description">
          Add Friend
        </div>
      </div>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  sendFriendRequest: (friendId) => dispatch(sendFriendRequest(friendId)),
})

export default withRouter(connect(null, mapDispatchToProps)(SearchResult));