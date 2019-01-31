import React from 'react';

const copyIdentifier = () => {
  $("#identifier").select();
  document.execCommand("copy");
  $(".input-box").addClass("text-copied");
  $("#copy-button").html("Copied");
  $("#copy-button").addClass("button-copied");
  setTimeout(() => {
    $(".input-box").removeClass("text-copied");
    $("#copy-button").html("Copy");
    $("#copy-button").removeClass("button-copied");
  }, 2000);
};

const InviteChannelModal = ({ chatChannel }) => {
  return (
    <div>
      <h1>Invite friends to {chatChannel.channel_name}</h1>
      <h3>Share this link with others to grant access to your server!</h3>
      <div className="input-box">
        <input id="identifier" type="text" readOnly value={"http://discode-aa.herokuapp.com/#/" + chatChannel.identifier} />
        <button id="copy-button" type="button" onClick={copyIdentifier}>Copy</button>
      </div>
      <h4>Your invite link never expires.</h4>
    </div>
  )
}

export default InviteChannelModal;