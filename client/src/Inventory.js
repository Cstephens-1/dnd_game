import React, { useEffect, useContext, useState } from 'react';

import { useCharacterContext } from './contexts/CharacterContext';
import { useInventoryContext } from './contexts/InventoryContext';

function Inventory({character}) {
    const [inventoryContext, setInventoryContext] = useInventoryContext()
  const [characterContext, setCharacterContext] = useCharacterContext()
  const [loading, setLoading] = useState(true);

  console.log("character context in inventory", characterContext)
  console.log("inventory context", inventoryContext)

  useEffect(() => {
    // Fetch inventory items from your API
    fetch(`http://localhost:3000/characters/${characterContext.id}/inventory`) // Update the API endpoint accordingly
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoading(false);
        setInventoryContext(data)
      });
  }, [characterContext, setInventoryContext]);

  return (
    <div>
      <h2>Inventory Items</h2>
      {loading ? (
        <p>Loading Inventory...</p>
      ) : (
        inventoryContext && inventoryContext.map(item => (
          <li>{item.name}</li>
        ))
      )}
    </div>
  );
}

export default Inventory;
