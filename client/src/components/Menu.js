import { useCharacterContext } from "../contexts/CharacterContext";
import useMenu from "./useMenu";


function Menu({menuOpen}) {

    const [characterContext, setCharacterContext] = useCharacterContext()

    if (!menuOpen) {
    return null;
    }

    function getPageNumberFromURL(){
        const currentPage = window.location.pathname;
        const pageNumber = parseInt(currentPage.replace(/[^0-9]/g, ""));
        return pageNumber;
    }

    function handleSave(){
        const newSavepoint = getPageNumberFromURL()
        console.log(newSavepoint, "new savepoint")
        fetch(`http://localhost:3000/characters/${characterContext.id}/savepoints/1`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ savepoint: newSavepoint }),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log("Savepoint updated:", data);
            })
            .catch((error) => {
            console.error("Error updating savepoint:", error);
            });
        };

    return (
        <>
            <div>
            <h2>Menu is opened</h2>
            <h1>{characterContext.name}</h1>
            <ul>
                <li>Inventory</li>
                <li>Persona</li>
                <li><button onClick={handleSave}>Save</button></li>
            </ul>
            </div>
        </>
    );
}

export default Menu;
