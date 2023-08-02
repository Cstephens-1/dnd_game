class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :health, :defense, :strength, :constitution, :dexterity, :intelligence
  has_one :user
end
