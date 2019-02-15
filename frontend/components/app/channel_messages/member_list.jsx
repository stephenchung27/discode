import React from 'react';
import MemberListItem from './member_list_item';
import { connect } from 'react-redux';

const MemberList = ({users}) => {
  const renderUsers = users.map((user, index )=> {
    return <MemberListItem key={index} user={user}/>
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

export default connect(mapStateToProps)(MemberList);