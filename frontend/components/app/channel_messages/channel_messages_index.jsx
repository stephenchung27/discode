import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  fetchChannelMessages,
  createChannelMessage
} from "../../../actions/channel_message_actions";
import ChannelMessageForm from "./channel_message_form";
import ChannelMessagesItem from "./channel_messages_item";

class ChannelMessagesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchChannelMessages(this.props.match.params.chatChannelPath);
  }

  componentDidUpdate(oldProps) {
    if (
      this.props.match.params.chatChannelPath !==
      oldProps.match.params.chatChannelPath
    ) {
      this.props.fetchChannelMessages(this.props.match.params.chatChannelPath);
    }
  }

  render() {
    const renderMessages = Object.values(this.props.channelMessages).map(
      (message, index) => (
        <ChannelMessagesItem key={index} message={message} users={this.props.users}/>
      )
    );

    return (
      <div className="messages-inner">
        <ul className="messages-index">{renderMessages}</ul>
        <ChannelMessageForm
          channelId={this.props.channelId}
          createChannelMessage={this.props.createChannelMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channelMessages: state.entities.channelMessages || [],
  users: state.entities.users,
  channelId: state.ui.channel.id,
});

const mapDispatchToProps = dispatch => ({
  fetchChannelMessages: channelPath =>
    dispatch(fetchChannelMessages(channelPath)),
  createChannelMessage: channelMessage =>
    dispatch(createChannelMessage(channelMessage))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChannelMessagesIndex)
);
