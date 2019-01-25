class Api::ServersController < ApplicationController
  def index
    render "api/servers/_user_servers", current_user: current_user
  end

  def show
    @server = Server.find_by(path: params[:id])

    if @server
      render :show
    else
      render json: ["That server does not exist."], status: 404
    end
  end

  def create
    @server = Server.new(server_params)
    @server.admin = current_user
    if @server.save
      @server.members << current_user
      # Saves automatically due to association Rails magic
      
      add_self_to_user_index(@server)
      create_default_channel(@server)

      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find_by(path: params[:id])
    
    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  private

  def create_default_channel(server)
    default_channel = ChatChannel.create(channel_name: "general", server_id: server.id)
    server.chat_channels << default_channel
    server.chat_channel_index << default_channel.id
    server.save
  end

  def add_self_to_user_index(server)
    current_user.server_index << server.id
    current_user.save!
  end

  def server_params
    params.require(:server).permit(:server_name)
  end
end
