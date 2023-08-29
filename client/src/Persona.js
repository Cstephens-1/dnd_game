import { useCharacterContext } from "./contexts/CharacterContext"

function Persona(){

    const [characterContext] = useCharacterContext()

    return(
        <>
            <h2>Persona</h2>
            <p>Health: {characterContext.health}</p>
            <p>Constitution: {characterContext.constitution}</p>
            <p>Defense:{characterContext.defense}</p>
            <p>Strength:{characterContext.strength}</p>
            <p>Dexterity:{characterContext.dexterity}</p>
            <p>Intelligence:{characterContext.intelligence}</p>
        </>


    )
}

export default Persona