json.friend_id @friend_request.friend.id

json.user do
  json.extract! @friend, :id, :username, :discriminator, :online
end