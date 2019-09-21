import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import styled from 'styled-components';

import Accessories from './categories/accessories/AccessoriesCard'

const UserSideDiv = styled.div`
    text-align: left;
    width: 30%;
    margin: 2rem;
`

function WelcomePage(props) {
    console.log(props, "Props")
    // const [category, newCategory] = useState();

    // const handleClick = event => {
    //     event.preventDefault();
        
    //   };

    return (
        <section className="user-topnine">
            <UserSideDiv className="user-sidebar">
                <h1>User IMG Placeholder</h1>
                <h2>User Name</h2>
            </UserSideDiv>
            <div className="user-cat">
                <Form className="cat-select">
                    <Field component="select" name="user-active-cat">
                        <option value="" disabled>My Top Nine:</option>
                        <option value="accessories" onClick={<Link to="/accessories" />}>Accessories</option>
                        <option value="animals">Animals</option>
                        <option value="boardgames">Board Games</option>
                        <option value="books">Books</option>
                        <option value="cars">Cars</option>
                        <option value="food">Food</option>
                        <option value="movies">Movies</option>
                        <option value="music">Music</option>
                        <option value="places">Places</option>
                        <option value="videogames">Video Games</option>
                    </Field>
                </Form>            
            </div>
        </section>
    )
}

export default withFormik({
    myPropsToValues: (values) => {
        return {
            accessories: values.accessories || '',
            animals: values.animals || '',
            boardgames: values.boardgames || '',
            books: values.books || '',
            cars: values.cars || '',
            food: values.food || '',
            movies: values.movies || '',
            music: values.music || '',
            places: values.places || '',
            videogames: values.videogames || ''
        }
    }
})(WelcomePage)
