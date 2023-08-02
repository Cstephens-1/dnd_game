# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cory= User.create(first_name:"Cory", last_name:"Test", email:"test@test.com", password_digest:"test123")

Lader = Character.create(name:"Lader", health:10, defense:3, constitution:3, strength:5, dexterity:3, intelligence:4, user_id:Cory.id)

Goblin = NonPlayable.create(name:"Goblin", enemy:true, health:10, constitution:5, defense:3, strength:7, dexterity:2, intelligence:1)

Milk = Item.create(name:"Milk", description:"a sealed bottle of refreshing milk", consumable:true, ability:"restores 2 hp")

Inventory1 = Inventory.create(character_id:Lader.id, item_id:Milk.id)

