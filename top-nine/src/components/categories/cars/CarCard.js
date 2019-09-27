import React from 'react';
import CarList from './CarList'
import { Link } from 'react-router-dom'

function Cars(props) {
return (
    <div>
        <h1>Cars</h1>
        <CarList handleChange={props.handleChange}/>
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Cars;
