json.extract! server, :id, :server_name, :path

json.default_channel ChatChannel.find(server.chat_channel_index.first).path