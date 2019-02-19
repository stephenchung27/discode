import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ServerIndex from './servers/server_index';
import ChatChannelIndex from './chat_channels/chat_channel_index';
import ChannelMessagesView from './channel_messages/channel_messages_view';
import DirectMessagesView from './direct_messages/direct_messages_view';
import Me from './direct_messages/me';
import { updateServerMember } from '../../actions/member_list_actions';
import { stopLoading, startLoading } from '../../actions/session_actions';
import FriendsView from './friends/friends_view';

class AppView extends React.Component {
  componentWillMount() {
    this.props.startLoading();
  }

  componentDidMount() {
    // Connect to online presence channel
    const updateServerMember = this.props.updateServerMember.bind(this);

    App.online = App.cable.subscriptions.create(
      { channel: "OnlineChannel", currentUserId: this.props.currentUserId },
      {
        received: data => {
          switch (data.type) {
            case "userUpdate":
              updateServerMember(data.user); 
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
  updateServerMember: (member) => 
    dispatch(updateServerMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppView);