class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :consumable, :ability
end
