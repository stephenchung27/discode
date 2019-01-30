class Api::ChatChannelsController < ApplicationController
  def index
    @server = current_user.servers.find_by(path: params[:server_path])
    
    @chat_channels = @server.chat_channels
    render :index
  end

  def create
    @chat_channel = ChatChannel.new(channel_params)
    if @chat_channel.save
      server = Server.find(params[:chat_channel][:server_id])
      self.add_self_to_server_index(server)
      render :show
    else
      render json: @chat_channel.errors, status: 422
    end
  end

  def add_self_to_server_index(server)
    server.chat_channel_index << @chat_channel.id
    server.save!
  end

  private

  def channel_params
    params.require(:chat_channel).permit(:channel_name)
  end
end