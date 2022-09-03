
function NavBar(){
    return(
        <>
            <div className="navbar bg-dark text-warning">
            <div className="container"> 
            <h2>My-Blog</h2>
            <form className="navbar-form">
            <input type="text" className="navbar-input rounded-pill p-1 ps-3" 
            placeholder="Enter your blog name"
                style={{width:"400px",outline: "none"}}
            /> 
            </form>
            
            </div>
            </div>
        </>
    )
}

export default NavBar;