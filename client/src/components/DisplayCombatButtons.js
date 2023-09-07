import { useCharacterContext } from "../contexts/CharacterContext"

function DisplayCombatButtons(){
    const [characterContext, setCharacterContext] = useCharacterContext()

    function rollDice(sides){
        return Math.floor(Math.random()*sides + 1)
    }

    function handleAttack() {
        const attackRoll = rollDice(6);
      
        if (attackRoll <= characterContext.dexterity) {
          console.log("You missed!");
        } else {
          const damage = Math.max(attackRoll - characterContext.defense, 0);
      
          if (damage > 0) {
            // Update characterContext using setCharacterContext
            setCharacterContext((prevCharacterContext) => ({
              ...prevCharacterContext,
              health: prevCharacterContext.health - damage,
            }));
            console.log(`You dealt ${damage} damage!`);
          } else {
            console.log("The attack was blocked by your defense!");
          }
        }
      }

      function resetHealth(){
        setCharacterContext({...characterContext, health: 10, dexterity:0})
      }
      
      

    function handleEvade(){
        const newDex = characterContext.dexterity + 5
        setCharacterContext({...characterContext, dexterity:newDex})
    }

    function handleUseItem(){

    }
    return(
        <>
            <button onClick={handleAttack}>Attack</button>
            <button onClick={handleEvade}>Evade</button>
            <button onClick={handleUseItem}>Use Item</button>
            <button onClick={resetHealth}>Reset health</button>
        </>
    )
}

export default DisplayCombatButtons