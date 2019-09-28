import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
    return (
        <div className="Nav">
            <NavLink className="NavLink" activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink className="NavLink" activeClassName="active" to="/Login">
              Login
            </NavLink>
        </div>
    )
}
