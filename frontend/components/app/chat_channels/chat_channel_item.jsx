import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import InviteChannelModal from './invite_channel_modal';

class ChatChannelItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { chatChannel, match } = this.props;
    const isActiveChannel = (match.params.chatChannelPath === chatChannel.path);

    return (
      <div className={"chat-channel" + (isActiveChannel ? " active-channel" : "")}>
        <div className="chat-info">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)"></path></svg>
          <span className="channel-name">{chatChannel.channel_name}</span>
        </div>
        <div className={"channel-buttons" + (isActiveChannel ? "" : " hidden-channel-buttons")} onClick={this.openModal}>
          <svg name="Invite" width="18" height="18" viewBox="0 0 18 18"><path transform="translate(18 0) scale(-1 1)" fill="currentColor" fillRule="nonzero" d="M11.5,9 C13.1575,9 14.5,7.6575 14.5,6 C14.5,4.3425 13.1575,3 11.5,3 C9.8425,3 8.5,4.3425 8.5,6 C8.5,7.6575 9.8425,9 11.5,9 Z M4,7 L4,5 L3,5 L3,7 L1,7 L1,8 L3,8 L3,10 L4,10 L4,8 L6,8 L6,7 L4,7 Z M11.5,10 C9.4975,10 6,11.005 6,13 L6,15 L17,15 L17,13 C17,11.005 13.5025,10 11.5,10 Z"></path></svg>
          <div className="button-description">Create Instant Invite</div>
        </div>
        <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal} className="invite-modal" overlayClassName="modal-overlay" ariaHideApp={false} closeTimeoutMS={250}>
          <InviteChannelModal closeModal={this.closeModal} chatChannel={chatChannel} />
        </Modal>
      </div>
    )
  }
};

export default withRouter(ChatChannelItem);