import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/Nav";
import Login from "./components/LogInPage";
import styled from "styled-components";
import LoginForm from "./components/LogInPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
          <NavBar />
          <Router>
            <NavLink className="NavLink" exact to="/LoginPage">
              Login
            </NavLink>
            <NavLink className="NavLink" to="/AboutPage">
              About
            </NavLink>
            <Route exact path="/WelcomePage" />

            <Route path="/AboutPage" />
          </Router>
        </header>
      </NavBg>

      <body className="App-body">
        <Route path="/LoginPage" render={props => <LoginForm {...props} />} />
      </body>
    </div>
  );
}

export default App;
