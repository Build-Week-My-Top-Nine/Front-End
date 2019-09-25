import React from "react";
import "./App.css";
import SearchForm from "./components/search/SearchForm";
import styled from "styled-components";
import LoginForm from "./components/LogInPage";
import { Route } from "react-router-dom";
import About from './components/WelcomePage'
import Nav from './components/Nav'

import WelcomePage from './components/WelcomePage'
import Accessories from './components/categories/accessories/AccessoriesCard'
import Animal from './components/categories/animals/AnimalCard'
import BoardGame from './components/categories/boardgames/BoardGameCard'
import Book from './components/categories/books/BookCard'
import Car from './components/categories/cars/CarCard'
import Food from './components/categories/food/FoodCard'
import Movie from './components/categories/movies/MovieCard'
import Music from './components/categories/music/MusicCard'
import Places from './components/categories/places/PlaceCard'
import VideoGame from './components/categories/videogames/VideoGameCard'

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
          <Nav />
          <SearchForm />
        </header>
      </NavBg>

      <div className="App-body">
      <Route exact path="/" component={WelcomePage} />
      <Route path="/Login" render={props => <LoginForm {...props} />} />
      <Route path="/About" render={props => <About {...props} />} />
      <Route path="/accessories" component={Accessories} />
      <Route path="/animals" component={Animal} />
      <Route path="/boardgames" component={BoardGame} />
      <Route path="/books" component={Book} />
      <Route path="/car" component={Car} />
      <Route path="/food"  component={Food} />
      <Route path="/movies"  component={Movie} />
      <Route path="/music" component={Music} />
      <Route path="/places" component={Places} />
      <Route path="/videogame" component={VideoGame} />
      </div>
    </div>
  );
}

export default App;
