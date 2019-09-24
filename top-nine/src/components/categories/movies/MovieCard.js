import React from 'react';
import MovieList from './MovieList'
import { Link } from 'react-router-dom'

function Movie(props) {
return (
    <div>
        <h1>Movie</h1>
        <MovieList />
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Movie;
