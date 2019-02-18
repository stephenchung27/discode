import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../../actions/server_actions';
import { withRouter } from 'react-router';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      server_name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ server_name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state)
      .then(this.props.closeModal())
      .then(({ server })=> {
        this.props.history.push({
          pathname: `/channels/${server.path}/${server.default_channel}`,
          state: { isNewMember: true, currentUserId }
        });
      });
  }

  render() {
    const { backToDefault } = this.props;
    return (
      <form onSubmit={this.handleSubmit} id="create-server-modal">
        <div className="create-server-main">
          <h2>CREATE YOUR SERVER</h2>
          <h3>By creating a server, you will have access to free voice and text chat to use amongst your friends.</h3>
          <div className="server-name-form">
            <label htmlFor="name">Server Name</label>
            <input id="name" type="text" onChange={this.update} value={this.state.server_name}
              placeholder="Enter a server name" />
          </div>
        </div>
        <div className="create-server-menu">
          <button type="button" onClick={backToDefault}>
            <img src="https://s3.amazonaws.com/discode/back_arrow.svg" />
          Back
          </button>
          <input type="submit" value="Create" />
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createServer: server => dispatch(createServer(server)),
});

export default withRouter(connect(null, mapDispatchToProps)(CreateModal));