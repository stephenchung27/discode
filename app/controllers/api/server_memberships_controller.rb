# frozen_string_literal: true

class Api::ServerMembershipsController < ApplicationController
  before_action :ensure_logged_on

  def create
    chat_channel = ChatChannel.find_by(identifier: params[:identifier])

    if chat_channel
      @server = chat_channel.server
      current_user.servers << @server
      current_user.server_index << @server.id
      current_user.save!
      render 'api/servers/show'
    else
      render json: ['Invalid invite'], status: 404
    end
  end
end
