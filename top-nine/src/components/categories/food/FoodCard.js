import React, {useEffect, useState} from 'react';
import FoodList from './FoodList'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Food(props) {
    const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    axios.get("https://mytopnineapi.herokuapp.com/api/topnine").then(res => {
      setCatagory(res.data);
      console.log(res.data);
    });

  }, []);
  console.log(catagory);
return (
    <div>
        <h1>Food</h1>
        {catagory.map(cat => {
            console.log(cat);
            return <h1 key={cat.id}>{cat.Category}</h1> 
        })}
        <FoodList />
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Food;
