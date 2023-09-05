class CharacterNpcInteraction < ApplicationRecord
  belongs_to :character
  belongs_to :non_playable
end
