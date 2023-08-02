class CreateNonPlayables < ActiveRecord::Migration[6.1]
  def change
    create_table :non_playables do |t|
      t.string :name
      t.integer :health
      t.integer :strength
      t.integer :constitution
      t.integer :dexterity
      t.integer :intelligence
      t.integer :defense
      t.boolean :enemy

      t.timestamps
    end
  end
end
