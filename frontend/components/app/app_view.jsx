import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ServerIndex from './servers/server_index';
import ChatChannelIndex from './chat_channels/chat_channel_index';
import FriendsPage from './chat_channels/friends_page';

const AppView = () => {
  return (
    <div className="app-view-wrapper">
      <Route path="/channels/:serverPath" component={ServerIndex} />
      <Switch>
        <Route path="/channels/@me" component={FriendsPage} />
        <Route path="/channels/:serverPath" component={ChatChannelIndex} />
      </Switch>
    </div>
  )
};

export default AppView;