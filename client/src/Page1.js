import { useNavigate } from "react-router-dom";
import { useCharacterContext } from "./contexts/CharacterContext";
import useMenu from "./components/useMenu";
import Menu from "./components/Menu";


function Page1() {
  const [characterContext, setCharacterContext] = useCharacterContext();
  const navigate = useNavigate();
  const [ menuOpen ] = useMenu();

  function page2Clicked() {
    navigate("/page2");
  }

  console.log("character context in page1", characterContext);
  return (
    <>
      <h1>Test in first page of story</h1>
      <button onClick={page2Clicked}>Page2</button>
      <Menu menuOpen={menuOpen}/>
    </>
  );
}

export default Page1;

