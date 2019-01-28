export const fetchChannelMessages = channelPath => {
  return $.ajax({
    method: "GET",
    url: "api/channel_messages",
    data: { channelPath }
  });
};

export const createChannelMessage = channel_message => {
  return $.ajax({
    method: "POST",
    url: "api/channel_messages",
    data: { channel_message },
  });
};
