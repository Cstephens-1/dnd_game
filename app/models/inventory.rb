class Inventory < ApplicationRecord
  belongs_to :character
  has_many :inventory_items
  has_many :items, through: :inventory_items
end
