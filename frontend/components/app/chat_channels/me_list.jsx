import React from 'react';

const MeList = () => {
  return <div className="me-list">
    <header>
      <svg name="PersonWaving" class="linkButtonIcon-Mlm5d6" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
      <div className="friends">Friends</div>
    </header>
    <div className="direct-messages-title">Direct Messages</div>
    <ul className="direct-messages">
      <li>
        <div className="dm-info">
          <div className="dm-avatar"></div>
          <span className="username">Username</span>
        </div>
        <button>
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon fill="#FFFFFF" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) " points="19 13 13 13 13 19 11 19 11 13 5 13 5 11 11 11 11 5 13 5 13 11 19 11"></polygon>
              <polygon points="0 0 24 0 24 24 0 24"></polygon>
            </g>
          </svg>
        </button>
      </li>
    </ul>
  </div>
};

export default MeList;