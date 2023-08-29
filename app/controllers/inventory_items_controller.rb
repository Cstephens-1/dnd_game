class InventoryItemsController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        inventory_items = InventoryItem.all 
        render json: inventory_items
    end

    def create 
        inventory_item = InventoryItem.new(inventory_items_params)
        if inventory_item.save 
            render json: inventory_item, include: :item, status: :created
        else
            render json: {error: "Could not create inventory Item"}, status: :unprocessable_entity
        end
    end

    def show
        inventory_item = InventoryItem.find(params[:id])
        render json: inventory_item
    end

    def destroy
        inventory_item = InventoryItem.find(params[:id])
    
        if inventory_item.destroy
          render json: { message: 'Item successfully deleted' }, status: :ok
        else
          render json: { error: 'Failed to delete item' }, status: :unprocessable_entity
        end
      end

      private

    def inventory_items_params
        params.permit(:character_id, :inventory_id, :item_id)
    end
end
