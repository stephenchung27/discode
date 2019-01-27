import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { logout } from '../../../actions/session_actions';
import { fetchUserServers } from '../../../actions/server_actions';

import ServerIndexItem from './server_index_item';
import ServerModal from './server_modal';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserServers(this.props.currentUserId);
  }

  componentWillUpdate(oldProps) {
    if (this.props.match.params.serverPath !== oldProps.match.params.serverPath) {
      this.props.fetchUserServers(this.props.currentUserId);
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { servers, logout, match } = this.props;

    const serverMap = servers["index"].map(id => (
      <Link key={id} to={`/channels/${servers[id].path}/${servers[id].default_channel}`} >
        <ServerIndexItem server={servers[id]} />
      </Link>
    ));

    return (
      <div className="server-sidebar">
        <Link to="/channels/@me">
          <div
            className={"home-link" + (match.params.serverPath === "@me" ? " active-server" : "")}>
            <div className="server-name">Home</div>
          </div>
        </Link>
        <div className="friends-online">0 online</div>
        <div className="server-separator"></div>
        <ul>
          {serverMap}
        </ul>
        <button className="server-add" onClick={this.openModal}><span>+</span></button>
        <div className="logout-separator"></div>
        <div className="logout-button" onClick={logout}>
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
  chatChannels: state.entities.chatChannels,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserServers: currentUserId => dispatch(fetchUserServers(currentUserId)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerIndex));