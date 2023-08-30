import { Navigate, useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import useMenu from "./components/useMenu";

function Page3(){
    const [ menuOpen ] = useMenu();
    const navigate = useNavigate()

    function page4Clicked() {
        navigate("/page4");
      }
    
    return(
        <>
            <h1>test in page3</h1>
            <button onClick={page4Clicked}>Page 4</button>
            <Menu menuOpen={menuOpen}/>
        </>
    )
}

export default Page3