class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :confirm_authentication
  before_action :set_character

  private

  def current_user
    @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
  end

  def set_character
    @character = Character.find(params[:character_id]) if params[:character_id]
  end

  def confirm_authentication
    return render json: { error: "You must be logged in to do that." }, status: :unauthorized unless current_user
  end

end
