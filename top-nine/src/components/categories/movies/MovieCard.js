import React from 'react';
import MovieList from './MovieList'
import { Link } from 'react-router-dom'

function Movie(props) {
    console.log("something")
return (
    <div>
        <h1>Movie</h1>
        <MovieList handleChange={props.handleChange} />
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Movie;
