import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../../actions/server_actions';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      server_name: "",
    }

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
      .fail(res => console.log(res.responseJSON));
  }

  render() {
    const { backToDefault } = this.props;
    return (
      <form onSubmit={this.handleSubmit} id="create-server-modal">
        <div className="create-server-main">
          <h2>CREATE YOUR SERVER</h2>
          <h3>By creating a server, you will have access to free voice and text chat to use amongst your friends.</h3>
          <div className="server-name-form">
            <label for="name">Server Name</label>
            <input id="name" type="text" onChange={this.update} value={this.state.server_name}
              placeholder="Enter a server name" />
          </div>
        </div>
        <div className="create-server-menu">
          <input type="submit" value="Create" />
          <button onClick={backToDefault}>Back</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createServer: server => dispatch(createServer(server)),
});

export default connect(null, mapDispatchToProps)(CreateModal);