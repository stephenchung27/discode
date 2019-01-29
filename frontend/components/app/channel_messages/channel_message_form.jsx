import React from "react";

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

  handleSubmit() {
    // this.props.createChannelMessage();
    App.cable.subscriptions.subscriptions[0].speak({
      author_id: this.props.currentUserId,
      body: this.state.body,
      channel_id: this.props.channel.id
    });
    this.setState({ body: "" });
  }

  render() {
    return (
      <div className="message-form-wrapper">
        <form className="messages-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder={`Message #${this.props.channel.name}`}
          />
          {/* <input type="submit" value="Send" /> */}
        </form>
      </div>
    );
  }
}

export default ChannelMessageForm;
