import React from "react";
import * as moment from "moment";

const ChannelMessagesItem = ({ messages, users }) => {
  const groupMessages = messages.map((message, index) => (
    <li key={index}>{message.body}</li>
  ));

  if (users[messages[0].author_id]) {
  return (
    <li className="message-item">
      <div className="user-avatar"></div>
      <header>
        <h1>{users[messages[0].author_id].username}</h1>
        <span>{moment(messages[0].created_at).calendar()}</span>
      </header>
      <ul className="message-group">{groupMessages}</ul>
      <hr className="message-divider" />
    </li>
  );} else {
    return null;
  }
};

export default ChannelMessagesItem;
