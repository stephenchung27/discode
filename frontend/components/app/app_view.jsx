import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ServerIndex from './servers/server_index';
import ChatChannelIndex from './chat_channels/chat_channel_index';
import ChannelMessagesView from './channel_messages/channel_messages_view';
import DirectMessagesView from './channel_messages/direct_messages_view';
import Me from './chat_channels/me';
import { receiveCurrentServerMember } from '../../actions/chat_channel_actions';
import { stopLoading, startLoading } from '../../actions/session_actions';
import FriendsView from '../app/channel_messages/friends_view';

class AppView extends React.Component {
  componentWillMount() {
    this.props.startLoading();
  }

  componentDidMount() {
    // Connect to online presence channel
    const receiveCurrentServerMember = this.props.receiveCurrentServerMember.bind(this);

    App.cable.subscriptions.create(
      { channel: "OnlineChannel", currentUserId: this.props.currentUserId },
      {
        received: data => {
          switch (data.type) {
            case "userUpdate":
              receiveCurrentServerMember(data.user);
              break;
          }
        }
      }
    );

    setTimeout(() => {
      $(".progress").html("READY");
      setTimeout(() => {
        $(".loading-screen").addClass("stop-loading");
        setTimeout(() => {
          this.props.stopLoading();
        }, 500);
      }, 1000);
    }, 1500);
  }

  render() {
    return <div className="app-view-wrapper">
      <Route path="/channels/:serverPath" component={ServerIndex} />
      <Switch>
        <Route path="/channels/@me" component={Me} />
        <Route path="/channels/:serverPath/:chatChannelPath" component={ChatChannelIndex} />
      </Switch>
      <Switch>
        <Route path="/channels/@me/:chatChannelPath" component={DirectMessagesView} />
        <Route path="/channels/:serverPath/:chatChannelPath" component={ChannelMessagesView} />
        <Route path="/channels/@me" component={FriendsView} />
      </Switch>
    </div>;
  }
};

const mapStateToProps = state => ({
  currentUserId: state.session.id,  
})

const mapDispatchToProps = dispatch => ({
  stopLoading: () => dispatch(stopLoading()),
  startLoading: () => dispatch(startLoading()),
  receiveCurrentServerMember: (member) => 
    dispatch(receiveCurrentServerMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppView);