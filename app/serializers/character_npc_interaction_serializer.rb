class CharacterNpcInteractionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :character
  has_one :non_playable
end
