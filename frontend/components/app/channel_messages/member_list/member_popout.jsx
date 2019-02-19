import React from 'react';
import { connect } from 'react-redux';
import { createDM } from '../../../../actions/dms_actions';
import { withRouter } from 'react-router';

class MemberPopout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const closeModal = this.props.closeModal;

    $(window).click(function() {
      closeModal();
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = this.state.message;

    this.props.createDM(this.props.user.id).then(action => {
      const channel = Object.values(action.chat_channel)[0];

      this.props.history.push({
        pathname: `/channels/@me/${channel.path}`,
        state: { message }
      });
    });

    this.setState({ message: "" });
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    const { user, currentUserId } = this.props;
    const colors = ["yellow", "green", "red", "gray", "purple"];

    return (
      <div className="member-popout">
        <header>
          <div className={"member-avatar " + colors[user.id % colors.length]}>
            <div className={"member-status " + (user.online ? "online" : "offline")}></div>
          </div>
          <span className="member-username">{user.username}</span>{"#" + user.discriminator}
        </header>
        {user.id === currentUserId ? null :
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder={`Message @${user.username}`} onChange={this.handleChange} value={this.state.message} />
          </form>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  createDM: recipientId => dispatch(createDM(recipientId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberPopout));