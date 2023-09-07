class NonPlayablesController < ApplicationController
    skip_before_action :confirm_authentication

    def index 
        non_playables = NonPlayable.all 
        render json: non_playables
    end

    # app/controllers/non_playables_controller.rb
def show
    npc = NonPlayable.find_by(name: params[:name])
    if npc
      render json: npc
    else
      render json: { error: 'NPC not found' }, status: :not_found
    end
  end
  

    private

    def npc_params
        params.permit(:name)
    end
      
end
