import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { joinServer } from '../actions/server_actions';

class AcceptInvite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: null,
    };
  }

  componentDidMount() {
    this.props.joinServer(this.props.match.params.inviteId)
      .then(({ server }) => {
        this.setState({ server: server });
      });
  }

  render() {
    if (this.state.server) {
      const server = this.state.server;

      return (<Redirect to={`/channels/${server.path}/${server.default_channel}`} />);
    } else {

      return null;

    }
  }
}

const mapDispatchToProps = dispatch => ({
  joinServer: identifier => dispatch(joinServer(identifier)),
});

export default withRouter(connect(null, mapDispatchToProps)(AcceptInvite));