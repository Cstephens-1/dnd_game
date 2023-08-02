class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :health
      t.integer :defense
      t.integer :strength
      t.integer :constitution
      t.integer :dexterity
      t.integer :intelligence
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
