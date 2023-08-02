class CreateSavepoints < ActiveRecord::Migration[6.1]
  def change
    create_table :savepoints do |t|
      t.integer :savepoint
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
