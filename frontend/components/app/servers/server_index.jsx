import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';
import { enterServer } from '../../../actions/server_actions';
import { fetchUserServers } from '../../../actions/server_actions';

import ServerIndexItem from './server_index_item';
import ServerModal from './server_modal';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      serverIndex: this.props.servers.serverIndex,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserServers(this.props.currentUserId);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { servers } = this.props;
    debugger
    const serverMap = servers["index"].map(id => (
      <Link key={id} to={`/channels/${servers[id].path}`} >
        <ServerIndexItem server={servers[id]} />
      </Link>
    ));

    return (
      <div className="server-sidebar">
        <Link to="/channels/@me">
          <div 
          className={"home-link" + (this.props.currentServer === "@me" ? " active-server" : "")}
          onClick={this.props.enterServer("@me")}>
          </div>
        </Link>
        <div className="friends-online">0 online</div>
        <div className="server-separator"></div>
        <ul>
          {serverMap}
        </ul>
        <button className="server-add" onClick={this.openModal}><span>+</span></button>
        <div className="logout-separator"></div>
        <div className="logout-button" onClick={this.props.logout}>
          <button><i className="fas fa-sign-out-alt fa-rotate-180"></i></button>
          <p className="logout-word">Logout</p>
        </div>
        <ServerModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUserId: state.session.id,
  servers: state.entities.servers,
  currentServer: state.ui.server.id,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  enterServer: server => () => dispatch(enterServer(server)),
  fetchUserServers: currentUserId => dispatch(fetchUserServers(currentUserId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);