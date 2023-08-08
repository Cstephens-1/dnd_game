class InventoriesController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        inventories = Inventory.all 
        render json: inventories
    end

    def show
        character = Character.find(params[:character_id])
        inventory_items = character.inventory.items
        render json: inventory_items
      end
end
