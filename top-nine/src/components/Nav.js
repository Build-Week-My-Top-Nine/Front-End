import React from 'react';
import { Route } from 'react-router-dom'

export default function Nav() {
    return (
        <NavBg>
        <header className="App-header">
          <h1>TopNine</h1>
          <SearchForm />
            <NavLink className="NavLink" to="/">
              Home
            </NavLink>
            <NavLink className="NavLink" to="/About">
              About
            </NavLink>
            <NavLink className="NavLink" to="/Login">
              Login
            </NavLink>
            </header>
        </NavBg>
    )
}