import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom'
import NavBar from './NavBar';
import Homepage from './Homepage';
import UnauthenticatedApp from './UnauthenticatedApp';
import CharacterCreation from './CharacterCreation';
import { useCharacterContext } from './contexts/CharacterContext';
import { useCallback, useEffect } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { InventoryProvider } from './contexts/InventoryContext';


function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const [characterContext, setCharacterContext] = useCharacterContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then((res) => {
        if (res.ok) {
          setCurrentUser(null);
          setCharacterContext(null);
          navigate('/');
        }
      });
  };

 


  return (
    <div>
      <nav>
        <NavBar handleLogout={handleLogout} currentUser={currentUser} />
      </nav>
      <InventoryProvider>
      <Routes>
        <Route path="/" element={<UnauthenticatedApp />} />
        <Route path="/homepage" element={<Homepage currentUser={currentUser} />} />
        <Route path="/createcharacter" element={<CharacterCreation currentUser={currentUser} />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
      </InventoryProvider>
    </div>
  );
}

export default AuthenticatedApp;

         

          

         

          