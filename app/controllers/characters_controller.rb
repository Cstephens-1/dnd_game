class CharactersController < ApplicationController
    skip_before_action :confirm_authentication
    

    def index 
        characters = Character.all 
        render json: characters
    end

    def user_characters
        @user_characters = current_user.characters
        render json: @user_characters
    end
    
    def create 
        character = Character.new(character_params)
        if character.save
            create_default_inventory(character)
            render json: character
        else
            render json: {error: 'Failed to create character'}, status: :unprocessable_entity
        end
    end

    def show 
        character = Character.find_by_id(params[:id])
        if character
            inventory = character.inventory
            render json: {
                character:character,
                inventory_id: inventory.id
            }
        else
            render json: {error: 'Character not found'}, status: :not_found
        end
    end

    def update
        character = Character.find(params[:id])
        if character.update(character_params)
          render json: character
        else
          render json: { error: 'Failed to update character savepoint' }, status: :unprocessable_entity
        end
    end



    private

    def character_params
        params.permit(:name, :health, :constitution, :defense, :dexterity, :strength, :intelligence, :savepoint, :user_id )
    end

    def create_default_inventory(character)
        inventory = Inventory.create(character_id: character.id)
        item1 = Item.find_by(name: 'Sword')
        item2 = Item.find_by(name: 'Shield')
        inventory.inventory_items.create(item: item1)
        inventory.inventory_items.create(item: item2)
      end
    

end