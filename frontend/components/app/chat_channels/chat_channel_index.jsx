import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CreateChatModal from './create_channel_modal';

import ChatChannelItem from './chat_channel_item';
import UserBar from './user_bar';
import { fetchServerChatChannels, fetchServerMembers } from '../../../actions/chat_channel_actions';

class ChatChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createModalIsOpen: false,
    };

    this.openCreateModal = this.openCreateModal.bind(this);
    this.closeCreateModal = this.closeCreateModal.bind(this);
  }

  openCreateModal() {
    this.setState({ createModalIsOpen: true });
  }

  closeCreateModal() {
    this.setState({ createModalIsOpen: false });
  }

  // Refactor out fetchServerMembers
  // ActionCable will handle this for us

  componentDidMount() {
    // this.props.fetchServerMembers(this.props.match.params.serverPath);
    this.props.fetchServerChatChannels(this.props.match.params.serverPath);
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.serverPath !== oldProps.match.params.serverPath) {
      // this.props.fetchServerMembers(this.props.match.params.serverPath);
      this.props.fetchServerChatChannels(this.props.match.params.serverPath);
    }
  }

  render() {
    const renderChannels = this.props.chatChannelIndex.map(
      chatChannelId => {
        if (this.props.chatChannels[chatChannelId]) {
          return (
            <Link
              key={chatChannelId}
              to={`/channels/${this.props.match.params.serverPath}/${
                this.props.chatChannels[chatChannelId].path
                }`}
            >
              <ChatChannelItem
                chatChannel={this.props.chatChannels[chatChannelId]}
              />
            </Link>
          );
        }
      }
    );

    return (
      <div className="channel-sidebar">
        <div className="server-header">
          <span>
            {this.props.server.name ? this.props.server.name : ""}
          </span>
        </div>
        <div className="channel-list">
          <div className="category">
            <svg className="down-arrow" width="12" height="12" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 10L12 15 17 10" />
            </svg>
            <span>Category</span>
            <div className="create-channel" onClick={this.openCreateModal}>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <polygon fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8" />
              </svg>
              <div className="button-description">Create Channel</div>
            </div>
          </div>
          {renderChannels}
        </div>
        <UserBar />

        <Modal
          isOpen={this.state.createModalIsOpen}
          onRequestClose={this.closeCreateModal}
          className="channel-modal"
          overlayClassName="modal-overlay"
          ariaHideApp={false}
          closeTimeoutMS={250}
        >
          <CreateChatModal closeModal={this.closeCreateModal} server={this.props.server} />
        </Modal>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  chatChannels: state.entities.chatChannels,
  chatChannelIndex: state.ui.channel.index,
  server: state.ui.server,
});

const mapDispatchToProps = dispatch => ({
  fetchServerChatChannels: serverId => dispatch(fetchServerChatChannels(serverId)),
  fetchServerMembers: serverPath => dispatch(fetchServerMembers(serverPath)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatChannelIndex));