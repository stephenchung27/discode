json.currentUser do
  json.partial! "api/users/user", user: @user
end

json.servers do
  json.partial! "api/servers/servers", servers: @user.servers
end