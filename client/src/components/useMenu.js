// useMenu.js
import { useState, useEffect } from "react";

function useMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState)=> !prevState);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "p" || event.key === "P") {
        toggleMenu(); // Toggle menuOpen on "P" key press
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return [ menuOpen, toggleMenu];
}

export default useMenu;
