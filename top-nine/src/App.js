import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";
import LoginForm from "./components/LogInPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from './components/WelcomePage'
import WelcomePage from './components/WelcomePage'
import Accessories from './components/categories/accessories/AccessoriesCard'
import Nav from './components/Nav'


const NavBg = styled.header`
  background-color: #33658a;
  height: 90px;
`;

const LogoH1 = styled.h1`
  color: white;
  margin: 1rem;
`

function App() {
  return (
    <div className="App">
      <NavBg>
        <header className="App-header">
          <LogoH1>TopNine</LogoH1>
          <SearchForm />
            <Nav />
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
