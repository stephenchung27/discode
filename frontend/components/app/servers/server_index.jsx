import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { logout } from "../../../actions/session_actions";
import { fetchUserServers } from "../../../actions/server_actions";

import ServerIndexItem from "./server_index_item";
import ServerModal from "./server_modal";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

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
    $("#create-server-modal").addClass(".session-form-appear-active");
    setTimeout(() => {
      this.setState({ modalIsOpen: false });
    }, 125);
  }

  render() {
    const { serverIndex, servers, logout, match } = this.props;

    const serverMap = serverIndex.map(id => (
      <Link
        key={id}
        to={`/channels/${servers[id].path}/${servers[id].default_channel}`}
      >
        <ServerIndexItem server={servers[id]} />
      </Link>
    ));

    return (
      <div className="server-sidebar">
        <Link to="/channels/@me">
          <div
            className={
              "home-link" +
              (match.params.serverPath === "@me" ? " active-server" : "")
            }
          >
            <div className="server-name">Home</div>
          </div>
        </Link>
        <div className="friends-online">0 online</div>
        <div className="server-separator" />
        <ul>{serverMap}</ul>
        <button className="server-add" onClick={this.openModal}>
          <span>+</span>
        </button>
        <div className="logout-separator" />
        <div className="logout-button" onClick={logout}>
          <button>
            <img src="https://s3.amazonaws.com/discode/logout.svg" />
          </button>
          <p className="logout-word">Logout</p>
        </div>
        <ServerModal
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUserId: state.session.id,
  servers: state.entities.servers,
  serverIndex: state.ui.server.index,
  chatChannels: state.entities.chatChannels
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserServers: currentUserId => dispatch(fetchUserServers(currentUserId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ServerIndex)
);
