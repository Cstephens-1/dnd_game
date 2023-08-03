class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.boolean :consumable
      t.string :ability

      t.timestamps
    end
  end
end
