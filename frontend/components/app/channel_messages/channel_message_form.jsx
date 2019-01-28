import React from "react";

class ChannelMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit() {
    // debugger
    this.props.createChannelMessage({
      body: this.state.body,
      channel_id: this.props.channelId,
    });
    this.setState({ body: "" });
  }

  render() {
    return (
      <form className="messages-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.body}/>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default ChannelMessageForm;
