class UsersController < ApplicationController
  skip_before_action :confirm_authentication
  def index 
    users = User.all 
    render json: users
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password, :first_name, :last_name)
  end
end
