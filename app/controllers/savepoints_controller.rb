class SavepointsController < ApplicationController
    skip_before_action :confirm_authentication
    before_action :set_character
  
    def index
        character = Character.find(params[:character_id])
        savepoints = character.savepoints
        render json: savepoints
      end
  
    def show
      savepoint = @character.savepoints.find_by_id(params[:id])
      if savepoint
        render json: savepoint
      else
        render json: { error: 'Savepoint not found' }, status: :not_found
      end
    end

    def update
        savepoint = Savepoint.find(params[:id])
        if savepoint.update(savepoint_params)
          render json: savepoint
        else
          render json: { error: 'Failed to update savepoint' }, status: :unprocessable_entity
        end
      end
  
    def create
      savepoint = @character.savepoints.build(savepoint_params)
      if savepoint.save
        render json: savepoint, status: :created
      else
        render json: { error: 'Failed to create savepoint' }, status: :unprocessable_entity
      end
    end
  
    private

  
    def savepoint_params
      params.permit(:savepoint, :character_id)
    end
  end
  
  
  
