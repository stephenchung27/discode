@chat_channels.each do |chat_channel|
  json.set! chat_channel.id do
    json.partial! "api/chat_channels/chat_channel", chat_channel: chat_channel
  end
end