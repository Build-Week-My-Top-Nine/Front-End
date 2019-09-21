import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';

import Accessories from './categories/accessories/AccessoriesCard'

function WelcomePage(props) {
    console.log(props, "Props")
    // const [category, newCategory] = useState();

    // const handleClick = event => {
    //     event.preventDefault();
        
    //   };

    return (
        <section className="user-topnine">
            <div className="user-sidebar"></div>
            <div className="user-cat">
                <Form>
                    <Field component="select" name="user-active-cat" className="cat-select">
                        <option value="" disabled>My Top Nine:</option>
                        <option value="accessories">Accessories</option>
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
