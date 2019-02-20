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
      json.extract! friend_request.friend, :id, :username, :discriminator, :online
    end
  end

  @incoming.each do |friend_request|
    json.set! friend_request.user.id do
      json.extract! friend_request.user, :id, :username, :discriminator, :online
    end
  end
end