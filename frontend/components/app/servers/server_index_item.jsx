import React from 'react';

const ServerIndexItem = ({ server }) => {
  return (
    <li className="server-item">
      {server.server_name[0]}
      {/* <div className="server-notifications">9</div> */}
      <div className="server-name">{server.server_name}</div>
    </li>
  )
}

export default ServerIndexItem;