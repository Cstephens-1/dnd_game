import { useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import useMenu from "./components/useMenu";
import { InventoryContext, useInventoryContext } from "./contexts/InventoryContext";
import { useCharacterContext } from "./contexts/CharacterContext";
import {useInventory} from "./useInventory"
import { useEffect, useState } from "react";

function Page2(){
    const {addNewItem, error} = useInventory()

    const [ menuOpen ] = useMenu();
    const [inventoryContext, setInventoryContext] = useInventoryContext()
    const [characterContext, setCharacterContext] = useCharacterContext()
    const [availableItems, setAvailableItems] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:3000/items?name=Sword")
        .then(resp=>resp.json())
        .then(item=>{
            console.log(item)
            setAvailableItems(item)
        })
    }, [])

    const navigate = useNavigate()

    console.log("characte context in page 2, testing for id", characterContext)

    function page3Clicked() {
        navigate("/page3");
      }

      function handleAddItem(){
        let sword = availableItems.find(item=> item.name==="Sword")
        if(sword){

            console.log(sword)
            addNewItem(characterContext.id, sword.id)
        }
      }

    return(
        <>
            <h1>test in page2</h1>
            <button onClick={page3Clicked}>Page3</button>
            <button onClick={handleAddItem}>Add to Inventory</button>
            <Menu menuOpen={menuOpen}/>
            {/* <button onClick={addItem}>Add to Inventory</button> */}
        </>
    )
}

export default Page2