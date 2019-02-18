import React from 'react';
import MeList from './me_list';
import UserInfo from '../chat_channels/user_info';
import SearchBar from './search_bar';

const Me = () => {
  return (
    <div className="me-sidebar">
      <SearchBar />
      <MeList />
      <UserInfo />
    </div>
  )
}

export default Me;