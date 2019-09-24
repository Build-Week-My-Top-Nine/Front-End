import React from 'react';
import AccessList from './AccessoriesList'
import { Link } from 'react-router-dom'

function Accessories (props) {
    
  return (
    <div className="App">
        <AccessList />
        <Link to="/"><h6>Back</h6></Link>
    </div>
  );
}

export default Accessories;
