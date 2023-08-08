class Item < ApplicationRecord
    has_many :inventory_items
    has_many :inventories, through: :inventory_items
end
