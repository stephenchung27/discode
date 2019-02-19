import React from 'react';
import UserAvatar from '../../user_avatar';

const SearchResult = ({ user, selected, onClick }) => {
  return (
    <li className={selected ? "selected" : ""} onMouseDown={onClick}>
      <UserAvatar user={user} hiddenStatus={true} />
      <span>{user.username}</span>#{user.discriminator}
    </li>
  )
}

export default SearchResult