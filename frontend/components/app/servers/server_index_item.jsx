import React from 'react';
import { withRouter } from 'react-router';

const ServerIndexItem = ({ server, match }) => {

  // debugger

  const avatarURL = server.avatarURL ? 
    { backgroundImage: `url(${server.avatarURL})`} : null;

  return (
    <li style={avatarURL} className={"server-item" + (match.params.serverPath === server.path ? " active-server" : "")}>
      {avatarURL ? null : server.server_name[0]}
      <div className="server-notifications">9</div>
      <div className="server-name">{server.server_name}</div>
    </li>
  )
}

export default withRouter(ServerIndexItem);