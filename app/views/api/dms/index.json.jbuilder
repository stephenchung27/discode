recipients = []

json.chat_channels do
  @chat_subscriptions.each do |chat_subscription|
    chat_channel = chat_subscription.chat_channel
    
    recipient = (chat_channel.users - [current_user]).first
    recipients.push(recipient)

    json.set! chat_channel.id do
      json.extract! chat_channel, :id, :path
      json.recipientId recipient.id
      json.username recipient.username
    end
  end
end

json.users do
  recipients.each do |recipient|
    json.set! recipient.id do
      json.partial! "api/users/user", user: recipient
    end
  end
end