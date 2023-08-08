class CreateInventoryItems < ActiveRecord::Migration[6.1]
  def change
    create_table :inventory_items do |t|
      t.belongs_to :inventory, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
