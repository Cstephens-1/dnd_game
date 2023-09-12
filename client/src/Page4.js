import React, { useEffect, useState } from "react";
import { useNonPlayerContext } from "./contexts/NonPlayerContext";
import { useNavigate } from "react-router-dom";
import NPCCard from "./NPCCard";
import useMenu from "./components/useMenu";
import Menu from "./components/Menu";
import { useCharacterContext } from "./contexts/CharacterContext";
import Persona from "./Persona";
import useCharNPCInteractions from "./contexts/useCharNPCInteractions";

function Page4() {
  const [nonPlayerContext, setNonPlayerContext] = useNonPlayerContext();
  const navigate = useNavigate();
  const [menuOpen] = useMenu();
  const [characterContext, setCharacterContext] = useCharacterContext();
  
  console.log("npc context on pg4*********8", nonPlayerContext);
  const goblin = useCharNPCInteractions(characterContext.id, "Goblin")

  console.log(goblin, "Goblin on pg4 using the new hook")

  useEffect(() => {
    console.log("character:", characterContext.name, "currentEnemy:", goblin ? goblin.name : "None");
  }, [characterContext, goblin]);

  function page2Clicked() {
    navigate("/page2");
  }

  function page5Clicked() {
    navigate("/page5");
  }

  return (
    <div>
      {goblin && <NPCCard npc={goblin} />}
      <Menu menuOpen={menuOpen} />
      <Persona />
      <button onClick={page2Clicked}>Page 2</button>
      <button onClick={page5Clicked}>Page 5</button>
    </div>
  );
}

export default Page4
