import { useEffect, useState } from "react";

function useCharNPCInteractions(characterId, npcName) {
    const [currentEnemy, setCurrentEnemy] = useState(null);
  
    useEffect(() => {
      // Fetch character's NPC interactions from the database based on character ID
      fetch(`http://localhost:3000/characters/${characterId}/npc_interactions`)
        .then((response) => response.json())
        .then((interactions) => {
          console.log("interactions from useCharNPCInteractions", interactions);
  
          // Check if an interaction with the specified NPC name exists
          const existingInteraction = interactions.find(
            (interaction) => interaction.name === npcName
          );
  
          if (existingInteraction) {
            // If the interaction exists, no need to set currentEnemy
            console.log(existingInteraction, "THIS IS THE DATA IN THE USEHOOK WHEN IT ALREADY EXISTS");
            setCurrentEnemy({ 
                name: existingInteraction.name, 
                health: existingInteraction.health,
                strength:existingInteraction.strength,
                constitution:existingInteraction.constitution,
                dexterity: existingInteraction.dexterity,
                intelligence:existingInteraction.intelligence,
                defense: existingInteraction.defense,
                enemy: existingInteraction.enemy 
            
            });
          } else {
            // If the interaction doesn't exist, fetch the enemy data from the enemies table
            fetch(`http://localhost:3000/non_playables/${npcName}`)
              .then((enemyResponse) => enemyResponse.json())
              .then((enemyData) => {
                console.log(enemyData, "THIS IS THE DATA IN THE HOOK WHEN IT DOESNT ALREADY EXIST!")
                // Create a new npc_interaction and set currentEnemy
                setCurrentEnemy({ 
                    name: enemyData.name, 
                    health: enemyData.health,
                    strength:enemyData.strength,
                    constitution:enemyData.constitution,
                    dexterity: enemyData.dexterity,
                    intelligence:enemyData.intelligence,
                    defense: enemyData.defense,
                    enemy: enemyData.enemy 
                
                });
  
                // Now, make a POST request to record the interaction
                fetch(`http://localhost:3000/characters/${characterId}/npc_interactions`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    character_id:characterId,
                    non_playable_id: enemyData.id
                  }),
                })
                  .then((response) => {
                    console.log("New Interaction successfully recorded", response)
                  })
                  .catch((error) => {
                    console.error("Error creating NPC interaction:", error);
                  });
              })
              .catch((error) => {
                console.error("Error fetching enemy data:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error fetching NPC interactions:", error);
        });
    }, [characterId, npcName]);
  
    return currentEnemy; // Return the currentEnemy state to the component
  }
  
  export default useCharNPCInteractions

