import React from 'react';
import { connect } from 'react-redux';
import UserAvatar from '../../user_avatar';

const UserBar = ({ currentUser }) => {
  return (
    <div id="user-info">
      <UserAvatar user={currentUser} hiddenStatus={true}/>
      <div id="user-username">
        <h4>{currentUser.username}</h4>
        <h5>#{currentUser.discriminator}</h5>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

export default connect(mapStateToProps)(UserBar);