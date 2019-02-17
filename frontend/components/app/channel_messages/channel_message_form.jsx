import React from "react";
import { connect } from "react-redux";

class ChannelMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    App.chat.speak({
      author_id: this.props.currentUserId,
      body: this.state.body,
      channel_id: this.props.channel.id
    });
    this.setState({ body: "" });
  }

  render() {
    const channelMessage = () => {
      if (this.props.channelType) {
        return `#${this.props.channel.name}`;
      } else {
        return (this.props.dmChannels[this.props.channel.id] ? `@${this.props.dmChannels[this.props.channel.id].username}` : "");
      }
    };

    return (
      <div className="message-form-wrapper" >
        <form className="messages-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder={`Message ${channelMessage()}`}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dmChannels: state.entities.dmChannels || null,
});

export default connect(mapStateToProps)(ChannelMessageForm);
