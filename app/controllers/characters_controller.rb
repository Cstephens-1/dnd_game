class CharactersController < ApplicationController
    before_action :set_character
    skip_before_action :confirm_authentication

    def index 
        characters = Character.all
        render json: characters, include: {user: {}}
    end 

    def user_characters
        @user_characters = current_user.characters
        render json: @user_characters
    end

    def show 
        character = Character.includes(:savepoints).find_by_id(params[:id])
        if character
          render json: character.to_json(include: { user: {}, savepoints: {} })
        else
          render json: { error: 'Character not found' }, status: :not_found
        end
      end
      

    def create 
        character = Character.new(character_params)
        if character.save
            character.savepoints.create(savepoint:1)
            render json: character
        else
            render json: {error:"Failed to create character"}, status: unprocessable_entity
        end
    end

    private

    def character_params
        params.permit(:name, :health, :constitution, :defense, :dexterity, :strength, :intelligence, :user_id )
    end
end
