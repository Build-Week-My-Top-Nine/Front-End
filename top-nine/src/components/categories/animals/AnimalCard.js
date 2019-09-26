import React from 'react';
import AnimalList from './AnimalList'
import { Link } from 'react-router-dom'

function Animal(props) {
return (
    <div>
        <h1>Animal</h1>
        <AnimalList handleChange={props.handleChange}/>
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Animal;
