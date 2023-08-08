import { useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import useMenu from "./components/useMenu";

function Page2(){

    const [ menuOpen ] = useMenu();

    const navigate = useNavigate()

    function page3Clicked() {
        navigate("/page3");
      }
    return(
        <>
            <h1>test in page2</h1>
            <button onClick={page3Clicked}>Page3</button>
            <Menu menuOpen={menuOpen}/>
            <button>Add to Inventory</button>
        </>
    )
}

export default Page2