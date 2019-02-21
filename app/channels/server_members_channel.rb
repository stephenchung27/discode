# frozen_string_literal: true

class ServerMembersChannel < ApplicationCable::Channel
  def subscribed
    stream_for "server_#{params[:serverId]}"

    load_members
  end

  def add_member(data)
    user = User.find(data["userId"])
    socket = { user: parse_member(user), type: 'serverMember' }

    ServerMembersChannel.broadcast_to("server_#{params[:serverId]}", socket)
  end

  def load_members
    members = Server.find(params[:serverId]).members
    socket = { members: parse_members(members), type: 'serverMembers' }

    ServerMembersChannel.broadcast_to("server_#{params[:serverId]}", socket)
  end

  def unsubscribed; end

  private

  def parse_members(members)
    Jbuilder.new do |json|
      ApplicationController.render(
        partial: 'api/users/users',
        locals: { users: members, json: json }
      )
    end.attributes!
  end

  def parse_member(member)
    Jbuilder.new do |json|
      ApplicationController.render(
        partial: 'api/users/user',
        locals: { user: member, json: json }
      )
    end.attributes!
  end
end
