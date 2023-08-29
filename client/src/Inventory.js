import React, { useEffect, useContext, useState } from 'react';
import { useCharacterContext } from './contexts/CharacterContext';
import { useInventoryContext } from './contexts/InventoryContext';
import { useInventory } from './useInventory';

function Inventory({character, menuOpen}) {
    const [inventoryContext, setInventoryContext] = useInventoryContext()
    const [characterContext, setCharacterContext] = useCharacterContext()
    const [loading, setLoading] = useState(true);
    const {deleteItem} = useInventory()

    console.log("character context in inventory", characterContext)
    console.log("inventory context", inventoryContext)

  useEffect(() => {
    // Fetch inventory items from your API
    fetch(`http://localhost:3000/characters/${characterContext.id}/inventory`) // Update the API endpoint accordingly
      .then(response => response.json())
      .then(data => {
        console.log(data, "fetching inventory")
        setLoading(false);
        setInventoryContext(data.inventory_items)
      });
  }, [characterContext, setInventoryContext]);

  const handleDelete= async(inventoryItemId)=>{
    await deleteItem(inventoryItemId)
  }

  return (
    <div>
      <h2>Inventory Items</h2>
      {loading ? (
        <p>Loading Inventory...</p>
      ) : (
        menuOpen && Array.isArray(inventoryContext) && inventoryContext.map(item => (
          <div>
            <li>{item.id}</li>
            {item.item && <li>{item.item.name}</li>}
            <button onClick={()=>handleDelete(item.id)}>Delete Item</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Inventory;
