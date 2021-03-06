class Api::ServersController < ApplicationController
  before_action :ensure_logged_on
  
  def index
    render :index
  end

  def show
    @server = Server.includes(:chat_channels).find_by(path: params[:id])

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
      self.add_self_to_user_index
      self.create_default_channel

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

  def create_default_channel
    default_channel = ChatChannel.create!(channel_name: "general")

    @server.chat_channels << default_channel
    @server.chat_channel_index << default_channel.id
    @server.save!
  end

  def add_self_to_user_index
    current_user.server_index << @server.id
    current_user.save!
  end

  private

  def server_params
    params.require(:server).permit(:server_name, :avatar)
  end 
end
