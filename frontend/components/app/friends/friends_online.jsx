import React from 'react';
import { connect } from 'react-redux';
import FriendsItem from './friends_item';


const FriendsOnline = ({ friends, users }) => {
  const renderFriends = friends.length > 0 ? friends
    .filter(friend => users[friend].online)
    .map((friendId, index) =>
      <FriendsItem key={index} friend={users[friendId]} />
    ) : null;

  return (
    <div className="friends-rows">
      {renderFriends}
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.entities.users,
})

export default connect(mapStateToProps)(FriendsOnline);