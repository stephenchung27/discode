class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    @current_user.appear
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.try(:reset_token!)
    current_user.disappear
    session[:session_token] = nil
  end

  def ensure_logged_on
    render json: ["You must be logged on"] unless logged_in?
  end
end