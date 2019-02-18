import React from 'react';
import UserAvatar from '../../user_avatar';
import MemberPopout from './member_popout';

class MemberListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({ isOpen: true });
    e.stopPropagation();
  }

  closeModal() {
    this.setState({ isOpen: false });
    $(window).unbind("click");
  }

  openPopout() {
    this.setState({ popoutOpen: !this.state.popoutOpen });
  }

  render() {
    const { user } = this.props;
    return (
      <div id={`member-${user.id}`} className="member" onClick={this.openModal}>
        <UserAvatar user={user} />
        <div className="member-username">{user.username}</div>
        {this.state.isOpen ? <MemberPopout user={user} closeModal={this.closeModal} /> : null }
      </div>
    )
  }
}

export default MemberListItem;