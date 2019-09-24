import React from 'react';
import FoodList from './FoodList'
import { Link } from 'react-router-dom'

function Food(props) {
return (
    <div>
        <h1>Food</h1>
        <FoodList />
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Food;
