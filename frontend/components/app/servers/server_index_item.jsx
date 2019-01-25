import React from 'react';

const ServerIndexItem = ({ server }) => {
  debugger
  return (
    <li className={"server-item" + (match.params.serverPath === server.path ? " active-server" : "")}>
      {server.server_name[0]}
      <div className="server-notifications">9</div>
      <div className="server-name">{server.server_name}</div>
    </li>
  )
}

export default ServerIndexItem;