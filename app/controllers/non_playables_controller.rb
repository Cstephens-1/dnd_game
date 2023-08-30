class NonPlayablesController < ApplicationController
    skip_before_action :confirm_authentication

    def index 
        non_playables = NonPlayable.all 
        render json: non_playables
    end
end
