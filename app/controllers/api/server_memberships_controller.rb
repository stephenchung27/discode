class Api::ServerMembershipsController < ApplicationController
  def create
    identifier = params[:identifier]
    @server = Server.find_by(identifier: identifier)
    if @server
      current_user.servers << @server
      render "api/servers/server", server: @server
    else
      render json: ['Server does not exist'], status; 404
    end
  end

  def destroy

  end
end