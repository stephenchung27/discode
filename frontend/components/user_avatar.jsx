import React from 'react';

class UserAvatar extends React.Component {
  render() {
    const colors = ["yellow", "green", "red", "gray", "purple"];

    return (
      <div className={"user-avatar-global " + colors[Math.floor(Math.random() * colors.length)]}>
        <div className="user-status online"></div>
      </div>
    )
  }
}

export default UserAvatar;