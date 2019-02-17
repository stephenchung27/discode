export const RECEIVE_SERVER_MEMBERS = "RECEIVE_SERVER_MEMBERS";
export const RECEIVE_SERVER_MEMBER = "RECEIVE_SERVER_MEMBER";
export const UPDATE_SERVER_MEMBER = "UPDATE_SERVER_MEMBER";

export const updateServerMember = member => ({
  type: UPDATE_SERVER_MEMBER,
  member,
});

export const receiveServerMembers = members => ({
  type: RECEIVE_SERVER_MEMBERS,
  members,
});

export const receiveServerMember = member => ({
  type: RECEIVE_SERVER_MEMBER,
  member,
})