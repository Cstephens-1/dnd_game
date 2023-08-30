import { useEffect } from "react";
import { useNonPlayerContext } from "./contexts/NonPlayerContext"
import { useNavigate } from "react-router-dom";


function Page4(){
    const [nonPlayerContext, setNonPlayerContext] = useNonPlayerContext()
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch goblin NPC data from the backend
        fetch('http://localhost:3000/non_playables?name="Goblin"') // Use the correct API endpoint
          .then(response => response.json())
          .then(data => {
            // Set the fetched goblin NPC data in the NonPlayerContext
            console.log(data)
          })
          .catch(error => {
            console.error('Error fetching goblin NPC:', error);
          });
      }, [setNonPlayerContext]);

    
     


    return(
        <>
    
        </>
    )
}

export default Page4