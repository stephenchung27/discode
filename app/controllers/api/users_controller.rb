class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/_current_user", current_user: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    server = Server.find_by(path: params[:server_path])
    @users = server.members
    render :index
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
