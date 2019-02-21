json.extract! user, :id, :username, :discriminator, :online

if user.avatar.attached?
  json.avatarURL url_for(user.avatar)
end