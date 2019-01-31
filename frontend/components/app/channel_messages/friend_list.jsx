import React from 'react';
import FriendListItem from './friend_list_item';
import { connect } from 'react-redux';

const FriendList = ({users}) => {
  const renderUsers = users.map((user, index )=> {
    return <FriendListItem key={index} user={user}/>
  });

  return (
    <div className="friend-list">
      <div className="friends-category">MEMBERS</div>
      {renderUsers}
    </div>
  )
}

export const mapStateToProps = state => ({
  users: Object.values(state.ui.serverUsers),
});

export default connect(mapStateToProps)(FriendList);