import React from 'react';
import './App.css';
import styled from "styled-components";
import { Route } from 'react-router-dom';

import NavBar from './components/Nav'
import SearchForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage';
import Accessories from './components/categories/accessories/AccessoriesCard'

const NavBg = styled.header`
  background-color: #33658A;
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
        </header>
      </NavBg>

      <body className="App-body">
        <WelcomePage />
        <Route path="/accessories" component={Accessories} />
      </body>
    </div>
  )
}

export default App;
