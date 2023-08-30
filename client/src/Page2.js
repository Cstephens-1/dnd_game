import { useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import useMenu from "./components/useMenu";
import { InventoryContext, useInventoryContext } from "./contexts/InventoryContext";
import { useCharacterContext } from "./contexts/CharacterContext";
import {useInventory} from "./useInventory"

function Page2(){
    const {addNewItem, error} = useInventory()

    const [ menuOpen ] = useMenu();
    const [inventoryContext, setInventoryContext] = useInventoryContext()
    const [characterContext, setCharacterContext] = useCharacterContext()

    const navigate = useNavigate()

    console.log("characte context in page 2, testing for id", characterContext)

    function page3Clicked() {
        navigate("/page3");
      }

      function handleAddItem(){
        addNewItem(characterContext.id, 3)
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