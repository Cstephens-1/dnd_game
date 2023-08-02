class NonPlayableSerializer < ActiveModel::Serializer
  attributes :id, :name, :health, :strength, :constitution, :dexterity, :intelligence, :defense, :enemy
end
