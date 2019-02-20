json.extract! user, :id, :username, :discriminator, :online

# if user.avatar.attached?
#   json.avatar url_for(user.avatar)
# end