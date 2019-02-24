import React from 'react';
import MeList from './me_list';
import UserBar from '../user_bar/user_bar';
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