import React from "react";
import ChannelMessagesIndex from "./channel_messages_index";
import DMBar from "./dm_bar";

const DirectMessagesView = () => {
  return (
    <div className="messages-container">
      <DMBar />
      <div className="messages-main">
        <ChannelMessagesIndex />
      </div>
    </div>
  );
};

export default DirectMessagesView;
