class Character < ApplicationRecord
  belongs_to :user
  has_many :savepoints
  
  has_many :inventories
  has_many :items, through: :inventories
end
