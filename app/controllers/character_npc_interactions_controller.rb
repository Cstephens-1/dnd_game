class CharacterNpcInteractionsController < ApplicationController
  skip_before_action :confirm_authentication
    def index
        char_npc_inter = CharacterNpcInteraction.where(character_id: params[:character_id])
        render json: char_npc_inter
      end

    def create 
      char_npc_inter = CharacterNpcInteraction.create(character_id: params[:character_id], non_playable_id:params[:non_playable_id])
      if char_npc_inter.save
        render json: {message: 'Interaction created succesfully'}, status: :created 
      else
        render json: {message: 'unable to create interaction'}, status: :unprocessable_entity
      end
    end
end
