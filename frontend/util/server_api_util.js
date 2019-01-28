export const fetchUserServers = user_id => {
  return $.ajax({
    method: "GET",
    url: "api/servers",
    data: { user_id }
  });
};

export const createServer = (server) => {
  return $.ajax({
    method: "POST",
    url: "api/servers",
    data: { server },
  });
};

export const updateServer = (server) => {
  return $.ajax({
    method: "PATCH",
    url: `api/servers/${server.id}`,
    data: { server },
  });
};

export const joinServer = () => {};