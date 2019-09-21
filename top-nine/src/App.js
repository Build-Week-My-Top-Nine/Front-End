import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";
import LoginForm from "./components/LogInPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from './components/WelcomePage'
import WelcomePage from './components/WelcomePage'
import Accessories from './components/categories/accessories/AccessoriesCard'


const NavBg = styled.header`
  background-color: #33658a;
  height: 90px;
`;

function App() {
  return (
    <div className="App">
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

      <body className="App-body">
      <Route path="/Login" render={props => <LoginForm {...props} />} />
      <Route path="/About" render={props => <About {...props} />} />
      <Route exact path="/" component={WelcomePage} />
      </body>
    </div>
  );
}

export default App;
