import React from 'react';
import { connect } from 'react-redux';
import { joinServer } from '../../../actions/server_actions';
import { withRouter } from 'react-router';

class JoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e) {
    const currentUserId = this.props.currentUserId;

    e.preventDefault();
    const identifier = this.state.identifier.slice(-5);
    this.props.joinServer(identifier)
      .then(this.props.closeModal())
      .then(({ server }) => {
        this.props.history.push({
          pathname: `/channels/${server.path}/${server.default_channel}`,
          state: { isNewMember: true, currentUserId },
        });
      });
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

const mapStateToProps = state => ({
  currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  joinServer: identifier => dispatch(joinServer(identifier)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinModal));