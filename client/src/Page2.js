import Menu from "./components/Menu";
import useMenu from "./components/useMenu";

function Page2(){

    const [ menuOpen ] = useMenu();
    return(
        <>
            <h1>test in page2</h1>
            <Menu menuOpen={menuOpen}/>
        </>
    )
}

export default Page2