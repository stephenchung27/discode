import React from 'react';
import Modal from 'react-modal';

import DefaultModal from './default_modal';
import JoinModal from './join_modal';
import CreateModal from './create_modal';

class ServerModal extends React.Component {
  constructor(props) {
    super(props);

    this.createServer = this.createServer.bind(this);
    this.joinServer = this.joinServer.bind(this);
    this.backToDefault = this.backToDefault.bind(this);
  }

  createServer() {
    $("#default-server-modal").addClass("move-to-left");
    $("#create-server-modal").addClass("move-to-left");
  }

  joinServer() {
    $("#default-server-modal").addClass("move-to-left");
    $("#join-server-modal").addClass("move-to-left");
  }

  backToDefault() {
    $("#default-server-modal").removeClass("move-to-left");
    $("#join-server-modal").removeClass("move-to-left");
    $("#create-server-modal").removeClass("move-to-left");
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        className="server-modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
        closeTimeoutMS={250}
      >
        <DefaultModal createServer={this.createServer} joinServer={this.joinServer} />
        <CreateModal backToDefault={this.backToDefault} closeModal={this.props.closeModal} />
        <JoinModal backToDefault={this.backToDefault} closeModal={this.props.closeModal} />
      </Modal>
    );
  }
}

export default ServerModal;