import React from 'react';
import MemberListItem from './member_list_item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveServerMember, receiveServerMembers } from '../../../../actions/member_list_actions';

class MemberList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(oldProps) {
    const isNewServer = this.props.serverId && oldProps.serverId !== this.props.serverId

    if (isNewServer) {

      // Unsubscribe if server members exist
      if (App.serverMembers) App.serverMembers.unsubscribe();

      App.serverMembers = App.cable.subscriptions.create(
        { channel: "ServerMembersChannel", serverId: this.props.serverId },
        {
          received: data => {
            switch (data.type) {
              case "serverMembers":
                this.props.receiveServerMembers(data.members);
                break;
              case "serverMember":
                this.props.receiveServerMember(data.user);
                break;
            }
          },
          addMember: function (data) { return this.perform("add_member", data) },
        }
      );
    }

    if (App.serverMembers && this.props.history.location.state && this.props.history.location.state.isNewMember) {
      App.serverMembers.addMember({ userId: this.props.history.location.state.currentUserId })
      // reset state so as to not run addMember again
      this.props.history.location.state = {};
    }
  }

  render() {
    const users = this.props.users;

    const renderOnlineUsers = users.filter(user => {
      return user["online"] === true;
    }).map((user, index) => {
      return <MemberListItem key={index} user={user} />
    });

    const renderOfflineUsers = users.filter(user => {
      return user["online"] === false;
    }).map((user, index) => {
      return <MemberListItem key={index} user={user} />
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
}

const mapStateToProps = state => ({
  users: Object.values(state.ui.serverUsers),
  serverId: state.ui.server.id,
});

const mapDispatchToProps = dispatch => ({
  receiveServerMembers: (members) => dispatch(receiveServerMembers(members)),
  receiveServerMember: (member) => dispatch(receiveServerMember(member)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberList)); 