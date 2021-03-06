export const fetchUserServers = user_id => {
  return $.ajax({
    method: "GET",
    url: "api/servers",
    data: { user_id }
  });
};

export const fetchServerUsers = server_id => {
  return $.ajax({
    method: "GET",
    url: "api/servers",
    data: { server_id },
  });
};

export const createServer = (server) => {
  return $.ajax({
    method: "POST",
    url: "api/servers",
    data: server,
    contentType: false,
    processData: false,
  });
};

export const updateServer = (server) => {
  return $.ajax({
    method: "PATCH",
    url: `api/servers/${server.id}`,
    data: { server },
  });
};

export const joinServer = (identifier) => {
  return $.ajax({
    method: "POST",
    url: "api/server_memberships",
    data: { identifier },
  });
};