import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createDM } from '../../../actions/dms_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient_id: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const duplicateChannelCheck = this.props.dmChannels.filter(channel =>
      channel.recipientId === parseInt(this.state.recipient_id));

    if (duplicateChannelCheck.length > 0) {
      this.props.history.push(`/channels/@me/${duplicateChannelCheck[0].path}`)
    } else {
      this.props.createDM(this.state).then(action => {
        const dmPath = Object.values(action.chat_channel)[0].path
        this.props.history.push(`/channels/@me/${dmPath}`)
      });
    }
    this.setState({recipient_id: ""});
  }

  handleChange(e) {
    this.setState({ recipient_id: e.target.value });
  }

  render() {
    return <form className="search-bar" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Find or start a conversation" onChange={this.handleChange} value={this.state.recipient_id} />
    </form>
  }
}

const mapStateToProps = state => ({
  dmChannels: Object.values(state.entities.dmChannels),
});

const mapDispatchToProps = dispatch => ({
  createDM: recipientId => dispatch(createDM(recipientId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));