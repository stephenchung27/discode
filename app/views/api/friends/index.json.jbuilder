# frozen_string_literal: true

json.friends @friends.map(&:id)

json.users do
  @friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :username, :discriminator, :online
    end
  end
end
