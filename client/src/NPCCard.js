// NPC.js
import React, { useState, useEffect } from "react";

function NPCCard({ npc }) {
  const [health, setHealth] = useState(0);
  const [defense, setDefense] = useState(0);

  console.log(npc)

  useEffect(() => {
    // Calculate health and defense based on NPC attributes
    const npcHealth = 10 + npc.constitution * 1.5;
    const npcDefense = npc.dexterity * 0.5;

    setHealth(npcHealth);
    setDefense(npcDefense);
  }, [npc.constitution, npc.dexterity]);

  return (
    <div>
      <h2>{npc.name}</h2>
      <p>Health: {health}</p>
      <p>Defense: {defense}</p>
      {/* Render other NPC details here */}
    </div>
  );
}

export default NPCCard;
