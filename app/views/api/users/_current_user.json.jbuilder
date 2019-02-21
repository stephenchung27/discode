json.extract! current_user, :id, :username, :discriminator, :online

if current_user.avatar.attached?
  json.avatarURL url_for(current_user.avatar)
end