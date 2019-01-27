import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import ChatChannelItem from './chat_channel_item';
import UserInfo from './user_info';
import { fetchServerChatChannels } from '../../../actions/chat_channel_actions';

class ChatChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.fetchServerChatChannels(this.props.match.params.serverPath);
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.serverPath !== oldProps.match.params.serverPath) {
      this.props.fetchServerChatChannels(this.props.match.params.serverPath);
    }
  }

  render() {
    const renderChannels = this.props.chatChannels["index"].map(chatChannelId => {
      return (
        <Link key={chatChannelId} to={`/channels/${this.props.match.params.serverPath}/${this.props.chatChannels[chatChannelId].path}`}>
          <ChatChannelItem
            chatChannel={this.props.chatChannels[chatChannelId]}
          />
        </Link>);
    });

    return (
      <div className="channel-sidebar">
        <div className="server-header">
          <span>Server Name</span>
        </div>
        <div className="channel-list">
          <div className="category-wrapper">
            <div className="category">
              <svg className="down-arrow" width="12" height="12" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 10L12 15 17 10"></path>
              </svg>
              <span>Category</span>
              <div className="create-channel" onClick={this.openModal}>
                <svg width="18" height="18" viewBox="0 0 18 18"><polygon fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                <div className="button-description">Create Channel</div>
              </div>
            </div>
          </div>
          {renderChannels}
        </div>
        <UserInfo />
        <Modal 
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="channel-modal"
          overlayClassName="modal-overlay"
          ariaHideApp={false}
        >
          <div>HELLO!</div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  chatChannels: state.entities.chatChannels,
});

const mapDispatchToProps = dispatch => ({
  fetchServerChatChannels: serverId => dispatch(fetchServerChatChannels(serverId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatChannelIndex));