import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/session_actions';

class UserOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      password: "",
      imageUrl: "",
      imageFile: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[email]', this.state.email);
    formData.append('user[password]', this.state.password);
    if (this.state.imageFile) {
      formData.append('user[avatar]', this.state.imageFile);
    };

    this.props.updateUser(this.props.currentUser.id, formData)
      .then(this.props.closeModal());
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
    const { currentUser } = this.props;

    const avatarPreviewStyle = {
      backgroundImage: currentUser.avatarURL ?
        `url(${currentUser.avatarURL})` :
        `url(${this.state.imageUrl})`,
    }

    return (
      <form className='user-options' onSubmit={this.handleSubmit}>
        <div className='general-options'>
          <div className='user-avatar-upload'>
            <label className='avatar-preview' style={avatarPreviewStyle}>
              <input
                type="file"
                onChange={this.handleUpload}
                accept="image/*"
              />
            </label>
            <p>Minimum Size: <span>128x128</span></p>
          </div>
          <div className='user-account-options'>
            <label>
              <h5>Username
                <span>*</span>
              </h5>
              <div className='username-input'>
                <input type="text"
                  value={this.state.username}
                  onChange={this.handleChange("username")} />
                  <div className='username-input-divider'></div>
                <div className='user-discriminator'>
                  #{currentUser.discriminator}
                </div>
              </div>
            </label>
            <label>
              <h5>Email
                <span>*</span>
              </h5>
              <input type="text" value={this.state.email}
                onChange={this.handleChange("email")} />
            </label>
            <label>
              <h5>Password
                <span>*</span>
              </h5>
              <input type="password" value={this.state.password}
                onChange={this.handleChange("password")} />
            </label>
          </div>
        </div>
        <div className='options-divider'></div>
        <div className='options-buttons'>
          <button className='delete-account'>Delete Account</button>
          <button className='save-account'
          onClick={this.handleSubmit}>Save</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: (userId, user) => dispatch(updateUser(userId, user)),
});

export default connect(null, mapDispatchToProps)(UserOptions);