import React from 'react';

const DefaultModal = ({ createServer, joinServer }) => {
  return <div id="default-server-modal">
      <h1>Oh, another server huh?</h1>
      <div className="server-actions">
        <div className="server-action server-action-create" onClick={createServer}>
          <h2>Create</h2>
          <p>Create a new server and invite your friends. It's free!</p>
          <div className="server-action-create-icon" />
          <button>Create a server</button>
        </div>
        <div className="server-action server-action-join" onClick={joinServer}>
          <h2>Join</h2>
          <p>Enter an Instant Invite and join your friend's server.</p>
          <div className="server-action-join-icon" />
          <button>Join a server</button>
        </div>
        <div className="or">or</div>
      </div>
    </div>;
};

export default DefaultModal;