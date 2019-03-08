export const register = user => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user },
  });
};

export const login = user => {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user },
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session",
  });
};

export const updateUser = (userId, user) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    data: user,
    contentType: false,
    processData: false,
  });
};

export const deleteUser = (userId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${userId}`,
  });
}