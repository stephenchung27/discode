import React from 'react';

const JoinModal = ({ backToDefault }) => {
  return (
    <div id="server-modal">
      <h1>Join</h1>
      <button onClick={backToDefault}>Back</button>
    </div>
  )
};

export default JoinModal;