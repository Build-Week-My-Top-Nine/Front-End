import React from 'react';
import {Form} from 'formik';

export default function FoodList(props) {
    return (
        <Form>
        <h3>Food List</h3>
        <label>
            <input type="radio" value="Spaghetti"></input>
            Spaghetti
        </label>
        <label>
            <input type="radio" value="Croissant"></input>
            Croissant
        </label>
        <label>
            <input type="radio" value="Stew"></input>
            Stew
        </label>
        <label>
            <input type="radio" value="Seafood"></input>
            Seafood
        </label>
        <label>
            <input type="radio" value="Stuffed Peppers"></input>
            Stuffed Peppers
        </label>
        <label>
            <input type="radio" value="Tostones"></input>
            Tostones
        </label>
        <label>
            <input type="radio" value="Tacos"></input>
            Tacos
        </label>
        <label>
            <input type="radio" value="Chili"></input>
            Chili
        </label>
        <label>
            <input type="radio" value="Orange Chicken"></input>
            Orange Chili
        </label>
    </Form>
    )
}
