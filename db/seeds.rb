# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# seeds.rb

# Create users
# user1 = User.create(username: 'user1', password: 'password1')
# user2 = User.create(username: 'user2', password: 'password2')

# # Create characters for users
# character1 = user1.characters.create(name: 'Character 1', health: 100, strength: 10)
# character2 = user2.characters.create(name: 'Character 2', health: 80, defense: 8)

# Create items
item1 = Item.create(name: 'Sword', description: 'A sharp sword', ability: { strength: 5 })
item2 = Item.create(name: 'Shield', description: 'A sturdy shield', ability: { defense: 3 })

# # Create inventories for characters
# character1_inventory = character1.create_inventory
# character2_inventory = character2.create_inventory

# # Associate items with inventories through InventoryItem
# character1_inventory_item1 = character1_inventory.inventory_items.create(item: item1)
# character1_inventory_item2 = character1_inventory.inventory_items.create(item: item2)
# character2_inventory_item2 = character2_inventory.inventory_items.create(item: item2)

puts "Seeds created successfully!"


