import * as ServerApiUtil from "../util/server_api_util";

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server,
});

const receiveServers = ({ servers, server_index }) => ({
  type: RECEIVE_SERVERS,
  servers,
  server_index,
});

export const fetchUserServers = currentUser => dispatch => {
  return ServerApiUtil.fetchUserServers(currentUser.id).then(servers =>
    dispatch(receiveServers(servers))
  );
};

export const createServer = server => dispatch => {
  return ServerApiUtil.createServer(server).then(server =>
    dispatch(receiveServer(server))
  );
};

export const joinServer = identifier => dispatch => {
  return ServerApiUtil.joinServer(identifier).then(server =>
    dispatch(receiveServer(server))
  );
};