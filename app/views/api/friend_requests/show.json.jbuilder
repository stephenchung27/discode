json.friend_id @friend_request.friend.id

json.user do
  json.partial! "api/users/user", user: @friend
end