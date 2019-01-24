import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class Temp extends React.Component {
  render() {
    debugger
    return (
      <p>
        User: {this.props.user.username}{this.props.user.discriminator}
        <button onClick={this.props.logout}>Log out</button>
      </p>
    )
  }
}

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Temp);