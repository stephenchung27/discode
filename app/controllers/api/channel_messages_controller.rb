class Api::ChannelMessagesController < ApplicationController
  before_action :ensure_logged_on

  def index
    @chat_channel = ChatChannel.find_by(path: params[:channelPath])
    if @chat_channel
      @channel_messages = @chat_channel.channel_messages.order("created_at DESC")
      render :index
    else
      render json: ["That channel does not exist"], status: 404
    end
  end

  def create
    @channel_message = ChannelMessage.new(message_params)
    @channel_message.author = current_user
    
    if @channel_message.save
      render :show
    else
      render json: @channel_message.errors.full_messages, status: 422
    end
  end

  def delete
  end

  def message_params
    params.require(:channel_message).permit(:body, :channel_id)
  end
end
