import React from "react";
import * as moment from "moment";
import VideoEmbed from './video_embed';
import reactStringReplace from 'react-string-replace';

const ChannelMessagesItem = ({ messages, users }) => {

  const parseMessage = (message, index) => {
    const links = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
    const youtube = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    const youtubeRegex = youtube.exec(message.body);

    return <li key={index}>
      {reactStringReplace(message.body, links, (match, index) => (
        <a key={index} href={match} className='links'>{match}</a>
      ))}
      {youtubeRegex ? <VideoEmbed videoId={youtubeRegex[1]} /> : null}
    </li>
  };

  const groupMessages = messages.map((message, index) => parseMessage(message, index));

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
    );
  } else {
    return null;
  }
};

export default ChannelMessagesItem;
