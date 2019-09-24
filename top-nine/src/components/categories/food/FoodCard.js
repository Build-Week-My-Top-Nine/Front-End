import React, {useEffect, useState} from 'react';
import FoodList from './FoodList'
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
        {catagory.map(cat => {
            console.log(cat);
            return <h1>{cat.Category}</h1> 
        })}
        <h1>Food</h1>
        <FoodList />
    </div>
)
}


export default Food;
