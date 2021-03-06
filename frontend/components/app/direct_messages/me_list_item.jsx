import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { destroyDM } from '../../../actions/dms_actions';

import UserAvatar from '../../user_avatar';

const MeListItem = ({ dmChannel, users, currentPath, destroyDM, history }) => {

  const destroyThenRedirect = (dmID) => (e) => {
    e.stopPropagation();

    destroyDM(dmID).then(() => {
      history.push("/channels/@me/");
    });
  }

  return <Link to={`/channels/@me/${dmChannel.path}`}>
    <li className={currentPath === dmChannel.path ? "active-dm" : ""}>
      <div className="dm-info">
        <UserAvatar user={users[dmChannel.recipientId]} />
        <span className="username">{users[dmChannel.recipientId] ? users[dmChannel.recipientId].username : ""}</span>
      </div>
      <button onClick={destroyThenRedirect(dmChannel.id)}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon fill="#FFFFFF" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) " points="19 13 13 13 13 19 11 19 11 13 5 13 5 11 11 11 11 5 13 5 13 11 19 11"></polygon>
            <polygon points="0 0 24 0 24 24 0 24"></polygon>
          </g>
        </svg>
      </button>
    </li>
  </Link>
};

const mapStateToProps = state => ({
  users: state.entities.users,
  currentPath: state.ui.channel.path,
});

const mapDispatchToProps = dispatch => ({
  destroyDM: dmID => dispatch(destroyDM(dmID)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeListItem));