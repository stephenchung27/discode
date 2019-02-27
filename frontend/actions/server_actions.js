import * as ServerApiUtil from "../util/server_api_util";

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server,
});

const receiveServers = ({ servers, server_index }) => ({
  type: RECEIVE_SERVERS,
  servers,
  server_index,
});

const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors,
});

export const clearServerErrors = () => ({
  type: CLEAR_SERVER_ERRORS,
});

export const fetchUserServers = currentUser => dispatch => {
  return ServerApiUtil.fetchUserServers(currentUser.id).then(servers =>
    dispatch(receiveServers(servers))
  );
};

export const createServer = server => dispatch => {
  return ServerApiUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)))
    .fail(errors => dispatch(receiveServerErrors(errors.responseJSON)));
};

export const joinServer = identifier => dispatch => {
  return ServerApiUtil.joinServer(identifier)
    .then(server => dispatch(receiveServer(server)))
    .fail(errors => dispatch(receiveServerErrors(errors.responseJSON)));
};