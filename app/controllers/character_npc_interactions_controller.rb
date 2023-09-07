class CharacterNpcInteractionsController < ApplicationController
    def index
        char_npc_inter = CharacterNpcInteraction.where(character_id: params[:character_id])
        render json: char_npc_inter
      end

    def show
    end
end
