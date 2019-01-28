import React from "react";
import ChannelMessagesIndex from "./channel_messages_index";
import ChannelBar from "./channel_bar";

const ChannelMessagesView = () => {
  return <div className="messages-container">
      <ChannelBar />
      <div className="messages-main">
          <ChannelMessagesIndex />
        {/* user list */}
      </div>
    </div>;
};

export default ChannelMessagesView;
