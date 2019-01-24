import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_SERVER = "RECEIVE_SERVER";

const receiveServer = (server) => ({
  type: RECEIVE_SERVER,
  server,
});

export const createServer = (server) => (dispatch) => {
  return ServerApiUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)));
};