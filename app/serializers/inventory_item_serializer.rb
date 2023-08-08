class InventoryItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :inventory
  has_one :item
end
