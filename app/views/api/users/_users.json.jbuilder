# frozen_string_literal: true

users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :discriminator, :online
    
    if user.avatar.attached?
      json.avatarURL url_for(user.avatar)
    end
  end
end