import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';

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
      <div className="server-sidebar">
        <Link to="" className="home-link"></Link>
        <div className="friends-online">0 online</div>
        <div className="server-separator"></div>
        <ul>
          {serverMap}
        </ul>
        <button className="server-add"><span>+</span></button>
        <div className="logout-separator"></div>
        <div className="logout-button">
        <button onClick={this.props.logout}><i className="fas fa-sign-out-alt"></i></button>
        <p className="logout-word">Logout</p>
        </div>
      </div>
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