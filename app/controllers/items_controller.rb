class ItemsController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        items = Item.all 
        render json: items
    end
end
