import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacterContext } from './contexts/CharacterContext';
import CharacterCard from './CharacterCard';

function Homepage({ currentUser }) {
  const [characterContext, setCharacterContext] = useCharacterContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${currentUser.id}/characters`, {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch characters');
        }
        return res.json();
      })
      .then((characters) => {
        console.log('Characters fetched:', characters);
        setCharacterContext(characters);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [currentUser.id, setCharacterContext]);

  console.log("character context in homepage", characterContext)

  return (
    <>
      <h1>Test in homepage</h1>
      {loading ? (
        <p>Loading Characters...</p>
      ) : (
        characterContext && characterContext.map((eachCharacter) => (
          <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
        ))
      )}
      <Link to="/createcharacter">Create a new Character</Link>
    </>
  );
}

export default Homepage;
