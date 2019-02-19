class FriendRequestsController < ApplicationController
  before_action :set_friend_request, except: [:index, :create]

  def index
    @incoming = FriendRequest.where(Friend: current_user)
    @outgoing = current_user.friend_requests
  end

  def create
    friend = User.find(params[:friend_id])
    @friend_request = current_user.friend_requests.new(friend: fried)

    if @friend_requst.save
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
    @friend_request.destroy
    render json: params[:id]
  end

  private

  def set_friend_request
    @friend_request = FriendRequest.find(params[:id])
  end
end