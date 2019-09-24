import React from 'react';
import {Form} from 'formik'

export default function MovieList(props) {
    return (
        <Form>
        <h3>Movie List</h3>
        <label>
            <input type="radio" value="Horror"></input>
            Horror
        </label>
        <label>
            <input type="radio" value="Comedy"></input>
            Comedy
        </label>
        <label>
            <input type="radio" value="Romantic"></input>
            Romantic
        </label>
        <label>
            <input type="radio" value="Family Friendly"></input>
            Family Friendly
        </label>
        <label>
            <input type="radio" value="Cartoon"></input>
            Cartoon
        </label>
        <label>
            <input type="radio" value="Animal"></input>
            Animal
        </label>
        <label>
            <input type="radio" value="Silent"></input>
            Silent
        </label>
        <label>
            <input type="radio" value="Fiction"></input>
            Fiction
        </label>
        <label>
            <input type="radio" value="Non Fiction"></input>
            Non Fiction
        </label>
    </Form>
    )
}
