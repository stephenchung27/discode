import React from 'react';
import ServerIndex from './servers/server_index';

const AppView = () => {
  return (
    <div className="app-view-wrapper">
      <ServerIndex />
      {/* <ChannelView /> */}
    </div>
  )
};

export default AppView;