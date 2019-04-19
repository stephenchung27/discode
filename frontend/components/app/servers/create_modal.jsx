import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../../actions/server_actions';
import { withRouter } from 'react-router';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serverName: "",
      imageUrl: "",
      imageFile: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ serverName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('server[server_name]', this.state.serverName);
    if (this.state.imageFile) {
      formData.append('server[avatar]', this.state.imageFile);
    };

    this.props.createServer(formData)
      .then(({ server }) => {
        this.props.closeModal();
        this.props.history.push({
          pathname: `/channels/${server.path}/${server.default_channel}`,
          state: { isNewMember: true, currentUserId: this.props.currentUserId }
        });
      });
  }

  handleUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file });
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {
    const { backToDefault } = this.props;

    const avatarPreviewStyle = {
      backgroundImage: `url(${this.state.imageUrl})`,
    }

    return (
      <form onSubmit={this.handleSubmit} id="create-server-modal">
        <div className="create-server-main">
          <h2>CREATE YOUR SERVER</h2>
          <h3>By creating a server, you will have access to free voice and text chat to use amongst your friends.</h3>
          <div className="create-form-container">
            <div className="server-name-form">
              <label htmlFor="name"
                style={this.props.errors.length > 0 ? { color: "#f04747" } : {}}>
                Server Name
              {this.props.errors.length > 0 ?  "- This field is required" : null}
              </label>
              <input id="name" type="text" onChange={this.update} value={this.state.serverName}
                placeholder="Enter a server name" />
            </div>
            <div className="server-avatar">
              <label className="avatar-preview" style={avatarPreviewStyle}>
                Change Icon
                <input
                  type="file"
                  onChange={this.handleUpload}
                  accept="image/*"
                />
              </label>
              <p>Minimum Size: <span>128x128</span></p>
            </div>
          </div>
        </div>
        <div className="create-server-menu">
          <button type="button" onClick={backToDefault}>
            <img src="https://s3.amazonaws.com/discode/back_arrow.svg" />
            Back
          </button>
          <input type="submit" value="Create" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  currentUserId: state.session.id,
  errors: state.errors.server,
})

const mapDispatchToProps = dispatch => ({
  createServer: server => dispatch(createServer(server)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateModal));