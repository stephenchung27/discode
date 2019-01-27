import React from 'react';
import { connect } from 'react-redux';
import { createChatChannel } from '../../../actions/chat_channel_actions';

class CreateChannelModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel_name: "",
      server_id: this.props.server.id,
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(e) {
    this.setState({ channel_name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChatChannel(this.state)
      .then(this.props.closeModal);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-channel-form">
        <header>
          <h1>Create Text Channel</h1>
          <h5>in Text Channels</h5>
        </header>
        <div className="channel-name-box">
          <h4>Channel Name</h4>
          <input type="text" onChange={this.handleUpdate} value={this.state.channel_name} />
        </div>
        {/* <div className="channel-type">
          <h4>Channel type</h4>
          <input type="radio" id="text-channel" name="channel-type" />
          <label htmlFor="text-channel">Text Channel</label>
          <input type="radio" id="voice-channel" name="channel-type" />
          <label htmlFor="voice-channel">Voice Channel</label>
        </div> */}
        <div className="modal-buttons">
          <button onClick={this.props.closeModal}>Cancel</button>
          <input type="submit" value="Create Channel" />
        </div>
      </form>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  createChatChannel: chatChannel => dispatch(createChatChannel(chatChannel)),
});

export default connect(null, mapDispatchToProps)(CreateChannelModal);
