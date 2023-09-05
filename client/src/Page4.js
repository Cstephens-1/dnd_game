import React, { useEffect, useState } from "react";
import { useNonPlayerContext } from "./contexts/NonPlayerContext";
import { useNavigate } from "react-router-dom";
import NPCCard from "./NPCCard";
import useMenu from "./components/useMenu";
import Menu from "./components/Menu";
import { useCharacterContext } from "./contexts/CharacterContext";

function Page4() {
  const [nonPlayerContext] = useNonPlayerContext(); // Use the context
  const navigate = useNavigate();
  const [ menuOpen ] = useMenu();
  const [characterContext, setCharacterContext] = useCharacterContext()

  console.log("npc context on pg4*********8", nonPlayerContext)


  function page2Clicked() {
    navigate("/page2");
  }

  return (
    <div>
      {nonPlayerContext.map((npc) => (
        <div key={npc.id}>
          <NPCCard npc={npc}/>
          <Menu menuOpen={menuOpen}/>
          <button onClick={page2Clicked}>Page 2</button>
        </div>
      ))}
    </div>
  );
}

export default Page4;
