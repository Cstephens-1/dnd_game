import React, { useEffect, useState } from "react";
import { useNonPlayerContext } from "./contexts/NonPlayerContext";
import { useNavigate } from "react-router-dom";
import NPCCard from "./NPCCard";
import useMenu from "./components/useMenu";
import Menu from "./components/Menu";
import { useCharacterContext } from "./contexts/CharacterContext";

function Page5() {
  const [nonPlayerContext, setNonPlayerContext] = useNonPlayerContext(); // Use the context
  const navigate = useNavigate();
  const [ menuOpen ] = useMenu();
  const [characterContext, setCharacterContext] = useCharacterContext()

  console.log("npc context on pg5*********8", nonPlayerContext)


  const vampire = nonPlayerContext.find((npc)=>npc.name==="Vampire" || npc.name === "vampire")

  

  
  useEffect(() => {
    if (!vampire) {
      const newVampire = {
        name:"Vampire", 
        health:10, 
        strength:7, 
        constitution:4, 
        dexterity:2, 
        intelligence:1, 
        defense: 4, 
        enemy:true
      }
        // Add the Vampire to the context
        setNonPlayerContext([...nonPlayerContext, newVampire]);
      };
    }, [vampire, nonPlayerContext, setNonPlayerContext]);



  function page3Clicked() {
    navigate("/page3");
  }

  function page6Clicked() {
    navigate("/page6");
  }

  return (
    <div>
          {vampire && <NPCCard npc={vampire}/>}
          <Menu menuOpen={menuOpen}/>
          <button onClick={page3Clicked}>Page 3</button>
          <button onClick={page6Clicked}>Page 6</button>
    </div>

  );
}

export default Page5;