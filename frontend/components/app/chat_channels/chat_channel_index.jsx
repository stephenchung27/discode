import React from 'react';
import { connect } from 'react-redux';
import { fetchServerChatChannels } from '../../../actions/chat_channel_actions';
import { withRouter } from 'react-router';

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
    return (
      <div className="channel-sidebar">
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  fetchServerChatChannels: serverId => dispatch(fetchServerChatChannels(serverId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatChannelIndex));