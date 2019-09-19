import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(props) {
  return (
    <div>
        <NavLink className='NavLink' to="">Login</NavLink>
        <NavLink className='NavLink' to="">About</NavLink>
    </div>
  );
}

export default NavBar;
