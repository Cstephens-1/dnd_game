import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCharacterContext } from "./contexts/CharacterContext";

function CharacterCard({ eachCharacter }) {
  const [savepoints, setSavepoints] = useState([]);
  const navigate = useNavigate();
  const [characterContext, setCharacterContext] = useCharacterContext();


  function handlePlay() {
      const existingSavepoint = eachCharacter.savepoint;
      console.log(existingSavepoint, "existingsavepoint in play button")
      setCharacterContext(eachCharacter)
      navigate(`/page${existingSavepoint}`);
    }
  

  useEffect(() => {
    console.log(characterContext, "charactercontext after play");
  }, [characterContext]);

  return (
    <>
      <li>{eachCharacter.name}</li>
      <p>Savepoint: {eachCharacter.savepoint}</p>
      <button onClick={handlePlay}>Play</button>
    </>
  );
}

export default CharacterCard;

