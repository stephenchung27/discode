import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchFriends,
  fetchFriendRequests,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
} from '../../../actions/friend_actions';
import { clearCurrentChannel } from '../../../actions/chat_channel_actions';
import FriendsBar from './friends_bar';
import FriendsAll from './friends_all';

class FriendView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "All",
    }

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
      />
      <div className="friends-header">
        <div className="friends-column" id="name">Name</div>
        <div className="friends-column-separator"></div>
        <div className="friends-column" id="status">Status</div>
        <div className="friends-column-separator"></div>
        <div className="friends-column" id="mutual-servers">Mutual servers</div>
        <div className="friends-column-separator"></div>
      </div>
      {this.state.view === "All" ? <FriendsAll friends={this.props.friends} /> : null}
      {this.state.view === "Online" ? <>Hello</> : null}
      {this.state.view === "Pending" ? <>Goodbye</> : null}
    </div>);
  }
}

const mapStateToProps = state => ({
  friends: state.friends.list,
  
});

const mapDispatchToProps = dispatch => ({
  fetchFriends: () => dispatch(fetchFriends()),
  clearCurrentChannel: () => dispatch(clearCurrentChannel()),
  fetchFriendRequests: () => dispatch(fetchFriendRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendView);