import React, { createContext, useContext, useEffect, useState } from 'react';

export const InventoryContext = createContext({});
export const useInventoryContext = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  const inventoryContextLocalStorage = localStorage.getItem("inventoryContext");
  const [inventoryContext, setInventoryContext] = useState(
    inventoryContextLocalStorage && inventoryContextLocalStorage !== "undefined"
      ? JSON.parse(inventoryContextLocalStorage)
      : {}
  );

  useEffect(() => {
    localStorage.setItem("inventoryContext", JSON.stringify(inventoryContext));
  }, [inventoryContext]);

  return (
    <InventoryContext.Provider value={[ inventoryContext, setInventoryContext ]}>
      {children}
    </InventoryContext.Provider>
  );
};
