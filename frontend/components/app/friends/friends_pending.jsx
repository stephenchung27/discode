import React from 'react';
import { connect } from 'react-redux';
import FriendRequest from './friend_request';
import { 
  acceptFriendRequest, 
  rejectFriendRequest,
} from '../../../actions/friend_actions';

class FriendsPending extends React.Component {
  render() {
    const {
      users,
      incoming,
      outgoing,
      acceptFriendRequest,
      rejectFriendRequest,
    } = this.props;

    const renderIncoming = incoming.map((friendId, index) =>
      <FriendRequest
        key={index}
        friend={users[friendId]}
        status="Incoming Friend Request"
        acceptFriendRequest={acceptFriendRequest}
        rejectFriendRequest={rejectFriendRequest}
      />
    );

    const renderOutgoing = outgoing.map((friendId, index) =>
      <FriendRequest
        key={index}
        friend={users[friendId]}
        status="Outgoing Friend Request"
      />
    );

    return (
      <div className="friends-rows">
        {renderIncoming}
        {renderOutgoing}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  acceptFriendRequest: (friendId) => dispatch(acceptFriendRequest(friendId)),
  rejectFriendRequest: (friendId) => dispatch(rejectFriendRequest(friendId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPending);