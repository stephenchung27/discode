import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchFriends,
  fetchFriendRequests,
} from '../../../actions/friend_actions';
import { clearCurrentChannel } from '../../../actions/chat_channel_actions';
import FriendsBar from './friends_bar';
import FriendsAll from './friends_all';
import FriendsPending from './friends_pending';
import FriendsOnline from './friends_online';

class FriendView extends Component {
  constructor(props) {
    super(props);
    if (this.props.history.location.state) {
      this.state = { view: this.props.history.location.state.viewType };
    } else {
      this.state = { view: "All" };
    };

    this.clickAll = this.clickAll.bind(this);
    this.clickOnline = this.clickOnline.bind(this);
    this.clickPending = this.clickPending.bind(this);
  }

  componentDidMount() {
    this.props.fetchFriends();
    this.props.fetchFriendRequests();
    this.props.clearCurrentChannel();
  }

  clickAll() { this.setState({ view: "All" }) }
  clickOnline() { this.setState({ view: "Online" }) }
  clickPending() { this.setState({ view: "Pending" }) }

  render() {
    return (<div className="friends-view">
      <FriendsBar
        view={this.state.view}
        clickAll={this.clickAll}
        clickOnline={this.clickOnline}
        clickPending={this.clickPending}
        incoming={this.props.incoming}
      />
      <div className="friends-header">
        <div className="friends-column" id="name">Name</div>
        <div className="friends-column-separator"></div>
        <div className="friends-column" id="status">Status</div>
        <div className="friends-column-separator"></div>
      </div>
      {this.state.view === "All" ? <FriendsAll friends={this.props.friends} /> : null}

      {this.state.view === "Online" ? <FriendsOnline friends={this.props.friends} /> : null}

      {this.state.view === "Pending" ?
        <FriendsPending
          incoming={this.props.incoming}
          outgoing={this.props.outgoing}
          acceptFriendRequest={this.props.acceptFriendRequest}
          rejectFriendRequest={this.props.rejectFriendRequest}
        /> : null}
    </div>);
  }
}

const mapStateToProps = state => ({
  friends: state.friends.list,
  outgoing: state.friends.outgoing,
  incoming: state.friends.incoming,
});

const mapDispatchToProps = dispatch => ({
  fetchFriends: () => dispatch(fetchFriends()),
  clearCurrentChannel: () => dispatch(clearCurrentChannel()),
  fetchFriendRequests: () => dispatch(fetchFriendRequests()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendView));