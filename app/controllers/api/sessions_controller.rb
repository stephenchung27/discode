# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    email = params[:user][:email]
    password = params[:user][:password]

    @user = User.find_by_credentials(email, password)
    if @user
      login!(@user)
      render :create
    else
      render json: ['Invalid username or password.'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: { partial: 'api/users/user.json.jbuilder', user: @user }
    else
      render json: ['You are not signed in.'], status: 404
    end
  end
end
