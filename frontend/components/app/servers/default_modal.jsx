import React from 'react';

const DefaultModal = ({ createServer, joinServer }) => {
  return (
    <div>
      <h1>Oh, another server huh?</h1>
      <div className="server-actions">
        <div className="server-action-create">
          <h2>Create</h2>
          <p>Create a new server and invite your friends. It's free!</p>
          <div className="server-action-create-icon"></div>
          <button onClick={createServer}>Create a server</button>
        </div>
        <div className="server-action-join">
          <h2>Join</h2>
          <p>Enter an Instant Invite and join your friend's server.</p>
          <div className="server-action-join-icon"></div>
          <button onClick={joinServer}>Join a server</button>
        </div>
      </div>
      <div className="or">or</div>
    </div>
  )
};

export default DefaultModal;