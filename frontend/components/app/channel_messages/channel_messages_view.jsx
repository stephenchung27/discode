import React from "react";
import ChannelMessagesIndex from "./channel_messages_index";
import ChannelBar from "./channel_bar";
import MemberList from "./member_list/member_list";

const ChannelMessagesView = () => {
  return (
    <div className="messages-container">
      <ChannelBar />
      <div className="messages-main">
        <ChannelMessagesIndex />
        <MemberList />
      </div>
    </div>
  );
};

export default ChannelMessagesView;
