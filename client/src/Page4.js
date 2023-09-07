import React, { useEffect, useState } from "react";
import { useNonPlayerContext } from "./contexts/NonPlayerContext";
import { useNavigate } from "react-router-dom";
import NPCCard from "./NPCCard";
import useMenu from "./components/useMenu";
import Menu from "./components/Menu";
import { useCharacterContext } from "./contexts/CharacterContext";
import DisplayCombatButtons from "./components/DisplayCombatButtons";
import Persona from "./Persona";

function Page4() {
  const [nonPlayerContext, setNonPlayerContext] = useNonPlayerContext(); // Use the context
  const navigate = useNavigate();
  const [ menuOpen ] = useMenu();
  const [characterContext, setCharacterContext] = useCharacterContext()

  console.log("npc context on pg4*********8", nonPlayerContext)


  const goblin = nonPlayerContext.find((npc)=>npc.name==="Goblin" || npc.name === "goblin")

  

  
  useEffect(() => {
    if (!goblin) {
      const newGoblin = {
        name:"Goblin", 
        health:10, 
        strength:7, 
        constitution:4, 
        dexterity:2, 
        intelligence:1, 
        defense: 4, 
        enemy:true
      }
        // Add the goblin to the context
        setNonPlayerContext([...nonPlayerContext, newGoblin]);
      };
    }, [goblin, nonPlayerContext, setNonPlayerContext]);



  function page2Clicked() {
    navigate("/page2");
  }


  function page5Clicked() {
    navigate("/page5");
  }

  return (
    <div>
          {goblin && <NPCCard npc={goblin}/>}
          <Menu menuOpen={menuOpen}/>
          <DisplayCombatButtons />
          <Persona />
          <button onClick={page2Clicked}>Page 2</button>
          <button onClick={page5Clicked}>Page 5</button>
    </div>

  );
}

export default Page4;
