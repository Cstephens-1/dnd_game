class InventorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :character
end
