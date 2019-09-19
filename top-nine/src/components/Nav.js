import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBg = styled.div`
  background-color: #33658a;
  height: 90px;
`;

function NavBar(props) {
  return (
    <div>
      <NavBg>
        <Link className='NavLink' to="">Login</Link>
        <Link className='NavLink' to="">About</Link>
      </NavBg>
    </div>
  );
}

export default NavBar;
