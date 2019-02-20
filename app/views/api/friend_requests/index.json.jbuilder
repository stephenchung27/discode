incoming_friend_ids = @incoming.map do |friend_request|
  friend_request.user.id
end

json.incoming incoming_friend_ids

outgoing_friend_ids = @outgoing.map do |friend_request|
  friend_request.friend.id
end

json.outgoing outgoing_friend_ids

json.users do
  @outgoing.each do |friend_request|
    json.set! friend_request.friend.id do
      json.partial! "api/users/user", user: friend_request.friend
    end
  end

  @incoming.each do |friend_request|
    json.set! friend_request.user.id do
      json.partial! "api/users/user", user: friend_request.user
    end
  end
end