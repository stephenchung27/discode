import React from "react";
import ChannelMessagesIndex from "./channel_messages_index";
import ChannelBar from "./channel_bar";
import FriendList from "./friend_list";

const ChannelMessagesView = () => {
  return (
    <div className="messages-container">
      <ChannelBar />
      <div className="messages-main">
        <ChannelMessagesIndex />
        <FriendList />
      </div>
    </div>
  );
};

export default ChannelMessagesView;
