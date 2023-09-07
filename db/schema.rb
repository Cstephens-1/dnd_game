# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_08_30_200915) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_npc_interactions", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "non_playable_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_character_npc_interactions_on_character_id"
    t.index ["non_playable_id"], name: "index_character_npc_interactions_on_non_playable_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "defense"
    t.integer "strength"
    t.integer "constitution"
    t.integer "dexterity"
    t.integer "intelligence"
    t.integer "savepoint"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_inventories_on_character_id"
  end

  create_table "inventory_items", force: :cascade do |t|
    t.bigint "inventory_id", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["inventory_id"], name: "index_inventory_items_on_inventory_id"
    t.index ["item_id"], name: "index_inventory_items_on_item_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "consumable"
    t.text "ability"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "non_playables", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "strength"
    t.integer "constitution"
    t.integer "dexterity"
    t.integer "intelligence"
    t.integer "defense"
    t.boolean "enemy"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "character_npc_interactions", "characters"
  add_foreign_key "character_npc_interactions", "non_playables"
  add_foreign_key "characters", "users"
  add_foreign_key "inventories", "characters"
  add_foreign_key "inventory_items", "inventories"
  add_foreign_key "inventory_items", "items"
end
