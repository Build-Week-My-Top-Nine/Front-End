import React, {useState} from "react";
import "./App.css";
import SearchForm from "./components/search/SearchForm";
import styled from "styled-components";
import LoginForm from "./components/LogInPage";
import { Route } from "react-router-dom";
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
  const [rememberMe, setRememberMe] = useState(false);
  const [chosenItems, setChosenItems] = useState({
    animals: "",
    accessories: "",
    boardGames: "",
    books: "",
    cars: "",
    food: "",
    movies: "",
    music: "",
    places: "",
    videoGames: "",
  });
  const handleChange = (catagory, item) => {
    // setRememberMe(!rememberMe);
    // console.log(catagory, item);
    setChosenItems({
      ...chosenItems, 
     [ catagory ]: item
    })
  };
  
  console.log("something", chosenItems);
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
      {/* <Route path="/About" render={props => <About {...props} />} /> */}
      <Route path="/accessories" render={props => <Accessories {...props} handleChange={handleChange} />} />
      <Route path="/animals" render={props => <Animal {...props} handleChange={handleChange} />} />
      <Route path="/boardgames" render={props => <BoardGame {...props} handleChange={handleChange} />}/>
      <Route path="/books" render={props => <Book {...props} handleChange={handleChange} />} />
      <Route path="/cars" render={props => <Car {...props} handleChange={handleChange} />} />
      <Route path="/food"  render={props => <Food {...props} handleChange={handleChange} />} />
      <Route path="/movies"  render={props => <Movie {...props} handleChange={handleChange} />} />
      <Route path="/music" render={props => <Music {...props} handleChange={handleChange} />} />
      <Route path="/places" render={props => <Places {...props} handleChange={handleChange} />} />
      <Route path="/videogames" render={props => <VideoGame {...props} handleChange={handleChange} />} />
      </div>
    </div>
  );
}

export default App;
