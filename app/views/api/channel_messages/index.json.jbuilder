json.channel_messages do
  @channel_messages.each do |channel_message|
    json.set! channel_message.id do
      json.partial! "api/channel_messages/channel_message", channel_message: channel_message
    end
  end
end

json.chat_channel @chat_channel, :id, :channel_name, :path
