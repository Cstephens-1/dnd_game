class Character < ApplicationRecord
  belongs_to :user
  has_one :inventory
  has_many :items, through: :inventory
end
