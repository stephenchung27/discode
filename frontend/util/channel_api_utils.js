export const fetchServerChatChannels = (server_path) => {
  return $.ajax({
    method: "GET",
    url: "api/chat_channels",
    data: { server_path },
  });
};

export const fetchServerMembers = (server_path) => {
  return $.ajax({
    method: "GET",
    url: "api/users",
    data: { server_path },
  });
};

export const createChatChannel = (chat_channel) => {
  return $.ajax({
    method: "POST",
    url: "api/chat_channels",
    data: { chat_channel },
  });
};