import React, { useEffect, useState } from "react";
import { useNonPlayerContext } from "./contexts/NonPlayerContext";
import { useNavigate } from "react-router-dom";
import NPCCard from "./NPCCard";
import useMenu from "./components/useMenu";
import Menu from "./components/Menu";
import { useCharacterContext } from "./contexts/CharacterContext";

function Page6() {
  const [nonPlayerContext, setNonPlayerContext] = useNonPlayerContext(); // Use the context
  const navigate = useNavigate();
  const [ menuOpen ] = useMenu();
  const [characterContext, setCharacterContext] = useCharacterContext()

  console.log("npc context on pg6*********8", nonPlayerContext)


  const skeleton = nonPlayerContext.find((npc) => npc.name.toLowerCase() === "skeleton");

useEffect(() => {
  if (!skeleton) {
    // Fetch the skeleton NPC data from the server
    fetch(`http://localhost:3000/non_playables/Skeleton`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch skeleton NPC data');
        }
      })
      .then((skeletonData) => {
        // Add the fetched skeleton NPC data to the context
        setNonPlayerContext([...nonPlayerContext, skeletonData]);
      })
      .catch((error) => {
        console.error('Error fetching skeleton NPC data:', error);
      });
  }
}, [skeleton, nonPlayerContext, setNonPlayerContext]);



  function page3Clicked() {
    navigate("/page3");
  }

  return (
    <div>
          {skeleton && <NPCCard npc={skeleton}/>}
          <Menu menuOpen={menuOpen}/>
          <button onClick={page3Clicked}>Page 3</button>
    </div>

  );
}

export default Page6;