import React from 'react';
import UserAvatar from '../../user_avatar';

const SearchResult = ({ user, selected }) => {
  return (
    <li className={selected ? "selected" : ""}>
      <UserAvatar user={user} hiddenStatus={true} />
      <span>{user.username}</span>#{user.discriminator}
    </li>
  )
}

export default SearchResult