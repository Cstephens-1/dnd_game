class ItemsController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        items = if params[:name]
            Item.where(name:params[:name])
        else
            Item.all 
        end
        render json: items
    end

    def show 
        item = Item.find_by(name: params[:name])
        render json: item
    end

    private 

    def item_params 
        params.permit(:name, :description, :consumable, :ability)
    end
end
