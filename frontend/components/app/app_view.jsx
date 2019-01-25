import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ServerIndex from './servers/server_index';
import ChatChannelIndex from './chat_channels/chat_channel_index';
import Me from './chat_channels/me';
import { stopLoading } from '../../actions/session_actions';

class AppView extends React.Component {
  componentDidMount() {
    this.props.stopLoading();
  }

  render() {
    return (
      <div className="app-view-wrapper">
        <Route path="/channels/:serverPath" component={ServerIndex} />
        <Switch>
          <Route path="/channels/@me" component={Me} />
          <Route path="/channels/:serverPath/:channelPath" component={ChatChannelIndex} />
        </Switch>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  stopLoading: () => dispatch(stopLoading()),
});

export default connect(null, mapDispatchToProps)(AppView);