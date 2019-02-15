import React from 'react';
import MemberListItem from './member_list_item';
import { connect } from 'react-redux';

const MemberList = ({users}) => {
  const renderOnlineUsers = users.filter(user => {
    return user["online"] === true;
  }).map((user, index) => {
    return <MemberListItem key={index} user={user}/>
  });

  const renderOfflineUsers = users.filter(user => {
    return user["online"] === false;
  }).map((user, index) => {
    return <MemberListItem key={index} user={user}/>
  });
  
  return (
    <div className="member-list">
      <div className="members-category">ONLINE</div>
      {renderOnlineUsers}
      <div className="members-category">OFFLINE</div>
      {renderOfflineUsers}
    </div>
  )
}

export const mapStateToProps = state => ({
  users: Object.values(state.ui.serverUsers),
});

export default connect(mapStateToProps)(MemberList);