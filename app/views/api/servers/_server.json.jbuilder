json.extract! server, :id, :server_name, :path

if server.avatar.attached?
  json.avatarURL url_for(server.avatar)
end

json.default_channel ChatChannel.find(server.chat_channel_index.first).path
