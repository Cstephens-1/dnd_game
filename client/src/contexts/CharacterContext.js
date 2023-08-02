// CharacterContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

export const CharacterContext = createContext({});
export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const characterContextLocalStorage = localStorage.getItem("characterContext");
  const [characterContext, setCharacterContext] = useState(
    characterContextLocalStorage && characterContextLocalStorage !== "undefined"
      ? JSON.parse(characterContextLocalStorage)
      : {}
  );

  useEffect(() => {
    localStorage.setItem("characterContext", JSON.stringify(characterContext));
  }, [characterContext]);

  return (
    <CharacterContext.Provider value={[characterContext, setCharacterContext]}>
      {children}
    </CharacterContext.Provider>
  );
};
