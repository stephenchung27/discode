import React from 'react';

const FriendsBar = ({ view, clickAll, clickOnline, clickPending, incoming }) => {
  return (
    <div className="friends-bar">
      <button className={view === "All" ? "active" : ""} onClick={clickAll}><p>All</p></button>
      <button className={view === "Online" ? "active" : ""} onClick={clickOnline}><p>Online</p></button>
      <button className={view === "Pending" ? "active" : ""} onClick={clickPending}>
        <p>
          Pending
        </p>
        {incoming.length > 0 ?
          <div className="friends-bar-notifications">{incoming.length}</div>
          : null}
      </button>
    </div>
  )
}

export default FriendsBar;