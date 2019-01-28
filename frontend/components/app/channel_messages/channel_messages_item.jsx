import React from "react";

const ChannelMessagesItem = ({ message, users }) => {
  return <li>
    {message.body}
    {users[message.author_id].username}
  </li>;
};

export default ChannelMessagesItem;
