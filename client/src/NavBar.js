import { Navigate, useNavigate } from "react-router-dom"

function NavBar({currentUser, handleLogout}){

    const navigate = useNavigate()
    return(
        <div>
        <button onClick={()=>navigate('/homepage')}>Home</button>
        <button to="/" onClick={handleLogout}>Logout</button>
        {currentUser && (
        <span>Welcome, {currentUser.username}</span>
      )}
        </div>
    )
}

export default NavBar
