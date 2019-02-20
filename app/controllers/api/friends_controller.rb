class Api::FriendsController < ApplicationController
  before_action :set_friend, only: :destroy

  def index
    @friends = current_user.friends
  end
  
  private

  def set_friend
    @friend = current_user.friends.find(params[:id])
  end
end
