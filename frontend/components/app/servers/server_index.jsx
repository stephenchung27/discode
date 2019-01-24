import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeServer: null,
    }
  }

  render() {

    const serverMap = this.props.servers.map((server) => (
      <ServerIndexItem key={server.id} server={server} />
    ));

    return (
      <ul>
        {serverMap}

        <button onClick={this.props.logout}>Log out</button>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    servers: Object.values(state.entities.servers),
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);