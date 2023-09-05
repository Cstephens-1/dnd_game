class Character < ApplicationRecord
  belongs_to :user
  has_one :inventory
  has_many :items, through: :inventory

  has_many :character_npc_interactions
  has_many :non_playables, through: :character_npc_interactions

  
end


