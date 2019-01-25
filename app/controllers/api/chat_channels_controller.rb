class Api::ChatChannelsController < ApplicationController
  def index
    @server = Server.find_by(path: params[:server_path])
    @chat_channels = @server.chat_channels
    render :index
  end

  def create
    @chat_channel = ChatChannel.new(channel_params)
    if @chat_channel.save
      render :show
    else
      render json: @chat_channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:chat_channel).permit(:channel_name, :server_id)
  end
end