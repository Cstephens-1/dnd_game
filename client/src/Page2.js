import { useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import useMenu from "./components/useMenu";
import { InventoryContext, useInventoryContext } from "./contexts/InventoryContext";
import { useCharacterContext } from "./contexts/CharacterContext";

function Page2(){

    const [ menuOpen ] = useMenu();
    const [inventoryContext, setInventoryContext] = useInventoryContext()
    const [characterContext, setCharacterContext] = useCharacterContext()

    const navigate = useNavigate()

    function page3Clicked() {
        navigate("/page3");
      }

    return(
        <>
            <h1>test in page2</h1>
            <button onClick={page3Clicked}>Page3</button>
            <button>Add to Inventory</button>
            <Menu menuOpen={menuOpen}/>
            {/* <button onClick={addItem}>Add to Inventory</button> */}
        </>
    )
}

export default Page2