import React from 'react';
import BookList from './BookList'
import { Link } from 'react-router-dom'

function Book (props) {
return (
    <div>
        <h1>Book</h1>
        <BookList handleChange={props.handleChange} />
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Book;
