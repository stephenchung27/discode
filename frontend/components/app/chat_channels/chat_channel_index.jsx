import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ChatChannelItem from './chat_channel_item';
import UserInfo from'./user_info';
import { fetchServerChatChannels } from '../../../actions/chat_channel_actions';

class ChatChannelIndex extends React.Component {
  componentDidMount() {
    this.props.fetchServerChatChannels(this.props.match.params.serverPath);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.serverPath !== this.props.match.params.serverPath) {
      this.props.fetchServerChatChannels(this.props.match.params.serverPath);
    }
  }
  render() {
    const renderChannels = this.props.chatChannels["index"].map(chatChannelId => {
      return (<ChatChannelItem
        key={chatChannelId}
        chatChannel={this.props.chatChannels[chatChannelId]}
      />)
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
            </div>
          </div>
          {renderChannels}
          {/* <div className="force-overflow"> */}
          {/* </div> */}
        </div>
        <UserInfo />
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