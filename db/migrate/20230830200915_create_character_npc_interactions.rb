class CreateCharacterNpcInteractions < ActiveRecord::Migration[6.1]
  def change
    create_table :character_npc_interactions do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.belongs_to :non_playable, null: false, foreign_key: true

      t.timestamps
    end
  end
end
