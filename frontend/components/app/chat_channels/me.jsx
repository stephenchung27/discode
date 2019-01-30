import React from 'react';
import MeList from './me_list';

const Me = () => {
  return (
    <div className="me-sidebar">
      <div className="search-bar">
        <input type="text" placeholder="Find or start a conversation" disabled />
        <div className="under-construction">Under Construction...</div>
      </div>
      <MeList />
    </div>
  )
}

export default Me;