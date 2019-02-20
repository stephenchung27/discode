# frozen_string_literal: true

users.each do |user|
  json.set! user.id do
    # json.partial! 'api/users/user', user: user
    json.extract! user, :id, :username, :discriminator, :online
  end
end