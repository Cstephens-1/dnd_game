function NavBar({currentUser, handleLogout}){
    return(
        <div>
        <button>Home</button>
        <button to="/" onClick={handleLogout}>Logout</button>
        {currentUser && (
        <span>Welcome, {currentUser.username}</span>
      )}
        </div>
    )
}

export default NavBar
