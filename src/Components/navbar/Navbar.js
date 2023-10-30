import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-title">
          <h1>Todos</h1>
        </div>
        {/* <div className="search">
           <input type="text" placeholder="Search" />
          <button>Search</button> 
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
