import React from 'react';
import Modal from 'react-modal';
import DefaultModal from './default_modal';
import JoinModal from './join_modal';
import CreateModal from './create_modal';

class ServerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: "default", // [default, create, join]
    }

    this.createServer = this.createServer.bind(this);
    this.joinServer = this.joinServer.bind(this);
    this.backToDefault = this.backToDefault.bind(this);
  }

  createServer() {
    this.setState({ formType: "create" });
  }

  joinServer() {
    this.setState({ formType: "join" });
  }

  backToDefault() {
    this.setState({ formType: "default"});
  }

  renderFormType() {
    if (this.state.formType === "default") {
      return (<DefaultModal createServer={this.createServer} joinServer={this.joinServer} />);
    } else if(this.state.formType === "create") {
      return (<CreateModal backToDefault={this.backToDefault} closeModal={this.props.closeModal}/>);
    } else if(this.state.formType === "join") {
      return (<JoinModal backToDefault={this.backToDefault}/>);
    }
  }

  render() {
    return (
      <Modal 
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        className="server-modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        {this.renderFormType()}
      </Modal>
    );
  }
}

export default ServerModal;