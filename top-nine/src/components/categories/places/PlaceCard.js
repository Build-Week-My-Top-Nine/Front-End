import React from 'react';
import PlaceList from './PlaceList'
import { Link } from 'react-router-dom'

function Places(props) {
return (
    <div>
        <h1>Places</h1>
        <PlaceList handleChange={props.handleChange}/>
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Places;
