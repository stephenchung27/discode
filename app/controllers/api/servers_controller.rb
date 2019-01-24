class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers
    render :index
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

  def server_params
    params.require(:server).permit(:server_name)
  end
end
