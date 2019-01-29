import React from 'react';
import { connect } from 'react-redux';
import { joinServer } from '../../../actions/server_actions';

class JoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit() {
    const identifier = this.state.identifier.slice(-5);
    this.props.joinServer(identifier);
  }

  handleUpdate(e) {
    this.setState({ identifier: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="join-server-modal">
        <div className="join-server-main">
          <h1>Join a server</h1>
          <p>Enter an Instant Invite below to join an existing server. The invite will look something like these:</p>
          <ul>
            <li>http://discode-aa.herokuapp.com/qJq5C</li>
            <li>qJq5C</li>
          </ul>
          <div className="join-server-input">
            <input type="text" onChange={this.handleUpdate} value={this.state.identifier} />
            <span>Enter an Instant Invite</span>
          </div>
        </div>
        <div className="join-server-menu">
          <button type="button" onClick={this.props.backToDefault}>
            <img src="https://s3.amazonaws.com/discode/back_arrow.svg" />
            Back
          </button>
          <input type="submit" value="Join" />
        </div>
      </form>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  joinServer: identifier => dispatch(joinServer(identifier)),
});

export default connect(null, mapDispatchToProps)(JoinModal);