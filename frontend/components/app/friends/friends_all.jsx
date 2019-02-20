import React from 'react';
import { connect } from 'react-redux';
import FriendsItem from './friends_item';

const FriendsAll = ({ friends, users }) => {
  const renderFriends = friends
    .map((friendId, index) =>
      <FriendsItem key={index} friend={users[friendId]} />
    );

  return (
    <div className="friends-rows">
      {renderFriends}
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.entities.users,
})

export default connect(mapStateToProps)(FriendsAll);