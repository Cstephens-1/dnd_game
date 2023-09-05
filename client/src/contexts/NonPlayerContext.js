import React, { createContext, useContext, useEffect, useState } from 'react';

export const NonPlayerContext = createContext([]);
export const useNonPlayerContext = () => useContext(NonPlayerContext);

export const NonPlayerProvider = ({ children }) => {
  const nonPlayercontextLocalStorage = localStorage.getItem("nonPlayerContext");
  const [nonPlayerContext, setNonPlayerContext] = useState(
    nonPlayercontextLocalStorage
      ? JSON.parse(nonPlayercontextLocalStorage)
      : []
  );

  useEffect(() => {
    localStorage.setItem("nonPlayerContext", JSON.stringify(nonPlayerContext));
  }, [nonPlayerContext]);

  return (
    <NonPlayerContext.Provider value={[nonPlayerContext, setNonPlayerContext]}>
      {children}
    </NonPlayerContext.Provider>
  );
};
