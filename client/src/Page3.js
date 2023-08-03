import { useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import useMenu from "./components/useMenu";

function Page3(){
    const [ menuOpen ] = useMenu();
    
    return(
        <>
            <h1>test in page3</h1>
            <Menu menuOpen={menuOpen}/>
        </>
    )
}

export default Page3