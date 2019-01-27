json.extract! server, :id, :server_name, :path

if server.chat_channel_index.length > 0
  json.default_channel ChatChannel.find(server.chat_channel_index.first).path
end