import React from 'react';

const FriendsBar = ({ view, clickAll, clickOnline, clickPending }) => {
  return (
    <div className="friends-bar">
      <button onClick={clickAll}>All</button>
      <button onClick={clickOnline}>Online</button>
      <button onClick={clickPending}>Pending</button>
    </div>
  )
}

export default FriendsBar;