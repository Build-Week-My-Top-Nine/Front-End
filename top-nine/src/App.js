import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';


function App() {
  return (
    <div className="App">
      <body className="App-body">
        <header className="App-header">
        <h1>TopNine</h1>
        <SearchForm />
        </header>
      </body>
    </div>
  );
}

export default App;
