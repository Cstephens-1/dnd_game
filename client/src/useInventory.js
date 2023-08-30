import { useState } from "react";
import { useInventoryContext } from "./contexts/InventoryContext";

export const useInventory = () =>{
    const [error, setError] = useState(null)
    const [inventoryContext, setInventoryContext] = useInventoryContext()

    const addNewItem = async (inventoryId, itemId) => {
        const newItemData = {
            "inventory_item":{
            "inventory_id": inventoryId,
            "item_id": itemId
            }
        };
        try {
            const response = await fetch('http://127.0.0.1:3000/inventory_items', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newItemData)
            });
    
            if (!response.ok) {
                throw new Error('Failed to add item');
            }
    
            const responseData = await response.json();
            const newItemId = responseData.id;
    
            // Fetch the newly added item data to include complete details
            const newItemResponse = await fetch(`http://127.0.0.1:3000/inventory_items/${newItemId}`);
            const newItem = await newItemResponse.json();
    
            setInventoryContext([...inventoryContext, newItem]);
            setError(null);
        } catch (error) {
            console.error("Error adding item", error);
            setError(error);
        }
    };
    
    

    const deleteItem = async(inventoryItemId)=>{
        try{
            const res = await fetch(`http://localhost:3000/inventory_items/${inventoryItemId}`,{
                method: 'DELETE',
            });
            if(!res.ok){
                throw new Error('Failed to delete item')
            }
            setInventoryContext(prevInventory=> prevInventory.filter(item => item.id !== inventoryItemId))
            setError(null)
        }catch(error){
            console.log("Error deleting item", error)
            setError(error)
        }
    }



return {addNewItem, deleteItem, error}
}
