class InventoryItemsController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        inventory_items = InventoryItem.all 
        render json: inventory_items
    end

    def create 
        inventory_item = inventory_item.new(inventory_item_params)
        if inventory_item.save 
            render json: inventory_item
        else
            render json: {error: "Could not create inventory Item"}, status: :unprocessable_entity
        end
    end

    def inventory_items_params
        params.permit(:inventory_id, :item_id)
    end
end
