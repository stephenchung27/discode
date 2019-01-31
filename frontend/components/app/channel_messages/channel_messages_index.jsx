import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  fetchChannelMessages,
  createChannelMessage,
  receiveChannelMessage
} from "../../../actions/channel_message_actions";
import { fetchUser } from '../../../actions/chat_channel_actions';
import ChannelMessageForm from "./channel_message_form";
import ChannelMessagesItem from "./channel_messages_item";

class ChannelMessagesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentDidMount() {
    const receiveChannelMessage = this.props.receiveChannelMessage.bind(this);
    const fetchUser = this.props.fetchUser.bind(this);
    const users = this.props.users;

    App.cable.subscriptions.create(
      { channel: "ChattingChannel" },
      {
        received: data => {
          if (!users[data.author_id]) {
            fetchUser(data.author_id);
          }
          receiveChannelMessage({
            id: data.id,
            body: data.body,
            author_id: data.author_id,
            created_at: data.created_at
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );

    this.props.fetchChannelMessages(this.props.match.params.chatChannelPath);
  }

  componentDidUpdate(oldProps) {
    if (
      this.props.match.params.chatChannelPath !==
      oldProps.match.params.chatChannelPath
    ) {
      this.props.fetchChannelMessages(this.props.match.params.chatChannelPath);
    }
    this.bottom.current.scrollIntoView();
  }

  render() {
    const renderMessages = () => {
      const msgs = Object.values(this.props.channelMessages);

      const groups = [];
      let index = 0;

      for (let i = 0; i < msgs.length; i++) {
        if (msgs[i + 1] && msgs[i].author_id === msgs[i + 1].author_id) {
          groups[index] ? groups[index].push(msgs[i]) : groups.push([msgs[i]]);
        } else {
          groups[index] ? groups[index].push(msgs[i]) : groups.push([msgs[i]]);
          index++;
        }
      }

      return groups.map((group, index) => (
        <ChannelMessagesItem
          key={index}
          messages={group}
          users={this.props.users}
        />
      ));
    };

    return (
      <div className="messages-inner">
        <ul className="messages-index">
          
          {renderMessages()}
          <div ref={this.bottom} />
        </ul>
        <ChannelMessageForm
          channel={this.props.channel}
          createChannelMessage={this.props.createChannelMessage}
          currentUserId={this.props.currentUserId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channelMessages: state.entities.channelMessages || [],
  users: state.entities.users,
  channel: state.ui.channel,
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchChannelMessages: channelPath =>
    dispatch(fetchChannelMessages(channelPath)),
  createChannelMessage: channelMessage =>
    dispatch(createChannelMessage(channelMessage)),
  receiveChannelMessage: channelMessage =>
    dispatch(receiveChannelMessage(channelMessage)),
  fetchUser: user_id =>
    dispatch(fetchUser(user_id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChannelMessagesIndex)
);
