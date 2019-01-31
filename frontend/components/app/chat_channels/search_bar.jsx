import React from 'react';
import { connect } from 'react-redux';
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
    if (this.props.dmChannels[this.state.recipient_id]) {
      alert("already there!");
    } else {
      this.props.createDM(this.state);
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
  dmChannels: state.entities.dmChannels,
});

const mapDispatchToProps = dispatch => ({
  createDM: recipientId => dispatch(createDM(recipientId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);