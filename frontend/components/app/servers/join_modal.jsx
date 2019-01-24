import React from 'react';
import { connect } from 'react-redux';

const JoinModal = ({ backToDefault }) => {
  return (
    <div>
      <h1>Join</h1>
      <button onClick={backToDefault}>Back</button>
    </div>
  )
};

export default JoinModal;