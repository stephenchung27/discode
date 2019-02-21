json.extract! server, :id, :server_name, :path, :admin_id

if server.avatar.attached?
  json.avatarURL url_for(server.avatar)
end

json.default_channel ChatChannel.find(server.chat_channel_index.first).path
