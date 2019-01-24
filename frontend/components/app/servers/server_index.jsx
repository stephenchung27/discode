import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';

import ServerIndexItem from './server_index_item';
import ServerModal from './server_modal';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeServer: null,
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
        <button className="server-add" onClick={this.openModal}><span>+</span></button>
        <div className="logout-separator"></div>
        <div className="logout-button">
          <button onClick={this.props.logout}><i className="fas fa-sign-out-alt fa-rotate-180"></i></button>
        <p className="logout-word">Logout</p>
        </div>
        <ServerModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
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