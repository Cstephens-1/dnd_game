import Inventory from "../Inventory";
import Persona from "../Persona";
import { useCharacterContext } from "../contexts/CharacterContext";
import useMenu from "./useMenu";


function Menu() {

    const [characterContext, setCharacterContext] = useCharacterContext()
    const [menuOpen] = useMenu()

    if (!menuOpen) {
    return null;
    }

    function getPageNumberFromURL(){
        const currentPage = window.location.pathname;
        const pageNumber = parseInt(currentPage.replace(/[^0-9]/g, ""));
        return pageNumber;
    }

    function handleSave() {
        const newSavepoint = getPageNumberFromURL(); // Get the new savepoint value from the URL
        console.log(characterContext.savepoint, ": pressed save. New savepoint:", newSavepoint);
      
        fetch(`http://localhost:3000/characters/${characterContext.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            savepoint: newSavepoint, // Update the savepoint property
          }),
        })
          .then(response => {
            if (response.ok) {
              console.log("Savepoint updated successfully.");
              
              // Update the characterContext with the new savepoint
              setCharacterContext(prevContext => ({
                ...prevContext,
                savepoint: newSavepoint,
              }));
            } else {
              console.error("Failed to update savepoint.");
            }
          })
          .catch(error => {
            console.error("An error occurred:", error);
          });
      }
      
    return (
        <>
            <div>
            <h2>Menu is opened</h2>
            <h1>{characterContext.name}</h1>
                <Inventory menuOpen = {menuOpen} />
            <ul>
                <Persona />
                <li><button onClick={handleSave}>Save</button></li>
            </ul>
            </div>
        </>
    );
}

export default Menu;
