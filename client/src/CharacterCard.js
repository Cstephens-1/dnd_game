import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCharacterContext } from "./contexts/CharacterContext";

function CharacterCard({ eachCharacter }) {
  const [savepoints, setSavepoints] = useState([]);
  const navigate = useNavigate();
  const [characterContext, setCharacterContext] = useCharacterContext();

  useEffect(() => {
    fetchSavepoints();
  }, []);

  function fetchSavepoints() {
    fetch(`http://localhost:3000/characters/${eachCharacter.id}/savepoints`, {
      credentials: "include",
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch savepoints");
        }
        return resp.json();
      })
      .then((data) => {
        setSavepoints(data);
      })
      .catch((error) => {
        console.error("error fetching savepoints", error);
      });
  }

  function handlePlay() {
    if (savepoints.length > 0) {
      // If there's a savepoint, navigate to the existing savepoint
      const existingSavepoint = savepoints[0].savepoint;
      setCharacterContext(eachCharacter)
      navigate(`/page${existingSavepoint}`);
    } else {
      // If there are no savepoints, navigate to page1 (starting point)
      navigate("/page1");
    }
  }

  useEffect(() => {
    console.log(characterContext, "charactercontext after play");
  }, [characterContext]);

  return (
    <>
      <li>{eachCharacter.name}</li>
      <p>Savepoint: {savepoints.length > 0 ? savepoints[0].savepoint : 1}</p>
      <button onClick={handlePlay}>Play</button>
    </>
  );
}

export default CharacterCard;

