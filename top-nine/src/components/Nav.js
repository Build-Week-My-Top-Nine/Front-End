import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
    return (
        <div className="Nav">
            <NavLink className="NavLink" to="/">
              Home
            </NavLink>
            <NavLink className="NavLink" to="/About">
              About
            </NavLink>
            <NavLink className="NavLink" to="/login">
              Login
            </NavLink>
        </div>
    )
}
