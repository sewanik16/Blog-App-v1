import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar mynav">
        <div className="container">
          <Link to="/">
            <img src="logo.png" alt="" />
          </Link>
          <h1></h1>
          <form className="navbar-form">
            <input
              type="text"
              className=" mysearch navbar-input rounded-pill p-1 ps-3"
              placeholder="Search blog by name"
              style={{ width: "600px", outline: "none" }}
            />
          </form>
          <Link to="/create">
          <button className="btn btn-secondary my-2">Create Blog</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
