import React, { useEffect, useState } from "react";
import { useNonPlayerContext } from "./contexts/NonPlayerContext";
import { useNavigate } from "react-router-dom";
import NPCCard from "./NPCCard";
import useMenu from "./components/useMenu";
import Menu from "./components/Menu";

function Page4() {
  const [nonPlayerContext] = useNonPlayerContext(); // Use the context
  const navigate = useNavigate();
  const [ menuOpen ] = useMenu();

  // Local state to store fetched NPCs
  const [fetchedNPCs, setFetchedNPCs] = useState([]);

  useEffect(() => {
    // Fetch goblin NPC data from the backend
    fetch('http://localhost:3000/non_playables?name=Goblin') // Remove double quotes around "Goblin"
      .then(response => response.json())
      .then(data => {
        setFetchedNPCs(data); // Store the fetched NPCs in local state
      })
      .catch(error => {
        console.error('Error fetching goblin NPC:', error);
      });
  }, []);

  return (
    <div>
      {fetchedNPCs.map(npc => (
        <div key={npc.id}>
          <NPCCard npc={npc}/>
          <Menu menuOpen={menuOpen}/>
        </div>
      ))}
    </div>
  );
}

export default Page4;
