# frozen_string_literal: true

class Api::FriendRequestsController < ApplicationController
  before_action :set_friend_request, except: %i[index create]

  def index
    @incoming = FriendRequest.where(friend: current_user)
    @outgoing = current_user.friend_requests
  end

  def create
    @friend = User.find(params[:friend_id])
    @friend_request = current_user.friend_requests.new(friend: @friend)

    if @friend_request.save
      render :show
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  def update
    @friend_request.accept
    render json: params[:id]
  end

  def destroy
    @friend_request.destroy!
    render json: params[:id]
  end

  private

  def set_friend_request
    @friend_request = FriendRequest.where(
      user_id: params[:id],
      friend_id: current_user.id
    ).first
  end
end
