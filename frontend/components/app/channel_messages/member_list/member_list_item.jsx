import React from 'react';
import UserAvatar from '../../../user_avatar';
import MemberPopout from './member_popout';
import { connect } from 'react-redux';

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
    this.setState({ isOpen: false });
    setTimeout(() => {
      this.setState({ isOpen: true });
    });
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
        {this.props.admin_id === user.id ? 
        <div className="admin-icon">
          <svg name="Crown" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="#faa61a" fillRule="nonzero" d="M2,11 L0,0 L5.5,7 L9,0 L12.5,7 L18,0 L16,11 L2,11 L2,11 Z M16,14 C16,14.5522847 15.5522847,15 15,15 L3,15 C2.44771525,15 2,14.5522847 2,14 L2,13 L16,13 L16,14 Z" transform="translate(3 4)"></path><rect width="24" height="24"></rect></g></svg>
        </div>
        : null }
        {this.state.isOpen ? <MemberPopout user={user} closeModal={this.closeModal} /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  admin_id: state.ui.server.admin_id,
})

export default connect(mapStateToProps)(MemberListItem);