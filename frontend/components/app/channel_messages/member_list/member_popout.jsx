import React from 'react';
import { connect } from 'react-redux';
import { createDM } from '../../../../actions/dms_actions';
import { withRouter } from 'react-router';
import { sendFriendRequest } from '../../../../actions/friend_actions';
import UserAvatar from '../../../user_avatar';

class MemberPopout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendFriendRequest = this.sendFriendRequest.bind(this);
  }

  componentDidMount() {
    const closeModal = this.props.closeModal;

    $(window).click(function () {
      closeModal();
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = this.state.message;

    this.props.createDM(this.props.user.id).then(action => {
      const channel = Object.values(action.chat_channel)[0];

      this.props.history.push({
        pathname: `/channels/@me/${channel.path}`,
        state: { message }
      });
    });

    this.setState({ message: "" });
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  sendFriendRequest(e) {
    e.preventDefault();
    this.props.sendFriendRequest(this.props.user.id);
  }

  render() {
    const { user, currentUserId, outgoing, friends } = this.props;
    const colors = ["yellow", "green", "red", "gray", "purple"];

    return (
      <div className="member-popout" onClick={(e) => e.stopPropagation()}>
        <header>
          <UserAvatar user={user} hiddenStatus={true} />
          <span className="member-username">{user.username}</span>{"#" + user.discriminator}
        </header>
        {user.id === currentUserId ? null :
          <main>
            {friends.indexOf(user.id) !== -1 ?
              null
              : outgoing.indexOf(user.id) === -1 ?
                <button onClick={this.sendFriendRequest}>
                  <svg name="PersonWaving" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                  Add Friend
            </button>
                :
                <div className="sent">Friend Request Sent</div>
            }
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder={`Message @${user.username}`} onChange={this.handleChange} value={this.state.message} />
            </form>
          </main>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUserId: state.session.id,
  outgoing: state.friends.outgoing,
  friends: state.friends.list,
});

const mapDispatchToProps = dispatch => ({
  createDM: recipientId => dispatch(createDM(recipientId)),
  sendFriendRequest: recipientId => dispatch(sendFriendRequest(recipientId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberPopout));