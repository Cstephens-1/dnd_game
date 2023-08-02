class InventorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :character
  has_one :item
end
