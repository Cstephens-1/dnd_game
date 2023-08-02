class InventoriesController < ApplicationController
    def index 
        inventory = Inventory.all 
        render json: inventory
    end 
end
