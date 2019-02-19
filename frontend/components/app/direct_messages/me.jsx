import React from 'react';
import MeList from './me_list';
import UserBar from '../chat_channels/user_bar';
import SearchBar from './search_bar';

const Me = () => {
  return (
    <div className="me-sidebar">
      <SearchBar />
      <MeList />
      <UserBar />
    </div>
  )
}

export default Me;