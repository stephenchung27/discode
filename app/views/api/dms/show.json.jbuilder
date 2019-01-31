recipient = @chat_channel.users - [current_user]

json.chat_channel do
  json.set! @chat_channel.id do
    json.extract! @chat_channel, :id, :path
    json.recipientId recipient.first.id
    json.username recipient.first.username
  end
end

json.users do
  json.set! recipient.first.id do
    json.extract! recipient.first, :id, :username, :discriminator
  end
end