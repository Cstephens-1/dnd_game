import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCharacterContext } from "./contexts/CharacterContext";
import { useNonPlayerContext } from "./contexts/NonPlayerContext";

function CharacterCard({ eachCharacter }) {
  // const [savepoints, setSavepoints] = useState([]);
  const navigate = useNavigate();
  const [characterContext, setCharacterContext] = useCharacterContext();
  const [nonPlayerContext, setNonPlayerContext] = useNonPlayerContext()

  
  // Log the contents of nonPlayerContext
  useEffect(() => {
    console.log(`Updated nonPlayerContext after play in homepage for ${eachCharacter.name}:`, nonPlayerContext);
  }, []);
  
  
      
      function handlePlay() {
        setNonPlayerContext([])
        fetch(`http://localhost:3000/characters/${eachCharacter.id}/npc_interactions`)
        .then((resp) => resp.json())
        .then((eachNPC) => {
          setNonPlayerContext(eachNPC);
          console.log(eachNPC, "each npc");
        });
          const existingSavepoint = eachCharacter.savepoint;
          console.log(existingSavepoint, "existingsavepoint in play button")
          setCharacterContext(eachCharacter)
          navigate(`/page${existingSavepoint}`);
        }
  return (
    <>
      <li>{eachCharacter.name}</li>
      <p>Savepoint: {eachCharacter.savepoint}</p>
      <button onClick={handlePlay}>Play</button>
    </>
  );
}

export default CharacterCard;

