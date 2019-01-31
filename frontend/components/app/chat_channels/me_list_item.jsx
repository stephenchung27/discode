import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MeListItem = ({ dmChannel, users }) => {
  return <Link to={`/channels/@me/${dmChannel.path}`}>
    <li>
      <div className="dm-info">
        <div className="dm-avatar"></div>
        <span className="username">{users[dmChannel.recipientId] ? users[dmChannel.recipientId].username : ""}</span>
      </div>
      <button>
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
});

export default connect(mapStateToProps)(MeListItem);