import React from 'react';

class UserAvatar extends React.Component {
  render() {
    const colors = ["yellow", "green", "red", "gray", "purple"];

    const avatarURL = this.props.user.avatarURL ?
      { backgroundImage: `url(${this.props.user.avatarURL})` } : 
      { backgroundImage: 'url("https://s3.amazonaws.com/discode/seeds/bg.png")' };

    return (
      <div 
      className={"user-avatar-global " + colors[this.props.user.id % colors.length]}
      style={avatarURL}
      >
        {this.props.hiddenStatus ? null :
          <div className={"user-status " + (this.props.user.online ? "online" : "offline")}></div>
        }
      </div>
    )
  }
}

export default UserAvatar;