class InventoriesController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        inventories = Inventory.all 
        render json: inventories
    end

    def show
      character = Character.find(params[:character_id])
      inventory = character.inventory
      inventory_items = inventory.inventory_items.includes(:item) # Include associated items
  
      render json: {
        character: character,
        inventory_items: inventory_items.as_json(include: :item)
      }
    end
      # serialized_inventory_items = inventory_items.map do |item|
      #   inventory_item = InventoryItem.find_by(inventory: character.inventory, item: item)
      #   {
      #     "item": item,
      #     "inventory_item_id": inventory_item.id
      #   }
      # end
      # render json: serialized_inventory_items
    

    def add_item
        inventory = Inventory.find_by(character_id: params[:character_id])
        item = Item.find(params[:item_id])

        if inventory && item
          inventory_item = inventory.inventory_items.build(item: item)

            if inventory_item.save
              inventory_item_id = inventory_item.id
                render json: {inventory_item_id: inventory_item_id}
            else
                render json: {error: "Failed to add item to inventory"}, status: :unprocessable_entity
            end
        else
            render json: {error: "Character or item not found"}, status: :not_found
        end 
    end

    def delete_item
        inventory = Inventory.find_by(character_id: params[:character_id])
        item = Item.find(params[:item_id])
    
        if inventory && item
          inventory_item = InventoryItem.find_by(inventory: inventory, item: item)
          if inventory_item
            inventory_item.destroy
            render json: { message: 'Item deleted from inventory' }
          else
            render json: { error: 'Item not found in inventory' }, status: :not_found
          end
        else
          render json: { error: 'Character or item not found' }, status: :not_found
        end
    end
end
