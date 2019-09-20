import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import NavBar from './components/Nav'
import styled from "styled-components";

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

      </body>
    </div>
  )
}

export default App;
