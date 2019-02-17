import * as DMApiUtil from '../util/dm_api_utils';

export const RECEIVE_ALL_DMS = "RECEIVE_ALL_DMS";
export const RECEIVE_DM = "RECEIVE_DM";
export const REMOVE_DM = "REMOVE_DM";

const receiveAllDMs = ({ chat_channels, users }) => ({
  type: RECEIVE_ALL_DMS,
  chat_channels,
  users,
});

const receiveDM = ({ chat_channel, users }) => ({
  type: RECEIVE_DM,
  chat_channel,
  users,
});

const removeDM = dmID => ({
  type: REMOVE_DM,
  dmID,
})

export const fetchAllDMs = () => dispatch => {
  return DMApiUtil.fetchAllDMs()
    .then(response => dispatch(receiveAllDMs(response)));
};

export const createDM = recipientId => dispatch => {
  return DMApiUtil.createDM(recipientId)
    .then(channel => dispatch(receiveDM(channel)));
};

export const destroyDM = dmID => dispatch => {
  return DMApiUtil.destroyDM(dmID)
    .then(dmID => dispatch(removeDM(dmID)));
}