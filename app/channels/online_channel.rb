class OnlineChannel < ApplicationCable::Channel
  def subscribed
    stream_for "online_presence"
    current_user = User.find(params[:currentUserId])
    current_user.appear

    user_info = {id: current_user.id, username: current_user.username, 
    discriminator: current_user.discriminator, online: true}
    socket = {user: user_info, type: "userUpdate"}

    OnlineChannel.broadcast_to("online_presence", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    current_user = User.find(params[:currentUserId])
    current_user.disappear

    user_info = {id: current_user.id, username: current_user.username, 
    discriminator: current_user.discriminator, online: false}
    socket = {user: user_info, type: "userUpdate"}

    # debugger

    OnlineChannel.broadcast_to("online_presence", socket)
  end
end
