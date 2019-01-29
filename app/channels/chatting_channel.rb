class ChattingChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chatting_channel"
  end

  def speak(data)
    message = ChannelMessage.create!(body: data["body"], author_id: data["author_id"], channel_id: data["channel_id"])
    socket = {id: message.id, body: message.body, author_id: message.author_id, created_at: message.created_at}
    ChattingChannel.broadcast_to("chatting_channel", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
