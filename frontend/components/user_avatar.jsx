import React from 'react';

class UserAvatar extends React.Component {
  render() {
    const colors = ["yellow", "green", "red", "gray", "purple"];
    return (
      <div className={"user-avatar-global " + colors[this.props.user.id % colors.length]}>
        {this.props.hiddenStatus ? null :
          <div className={"user-status " + (this.props.user.online ? "online" : "offline")}></div>
        }
      </div>
    )
  }
}

export default UserAvatar;