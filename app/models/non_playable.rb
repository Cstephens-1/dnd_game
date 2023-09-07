class NonPlayable < ApplicationRecord

    has_many :character_npc_interactions
    has_many :characters, through: :character_npc_interactions
end
