import React from 'react';
import {Form} from 'formik'

export default function CarList(props) {
    return (
        <Form>
        <h3>Car List</h3>
        <label>
            <input type="radio" value="Lamborghini"></input>
            Lamborghini
        </label>
        <label>
            <input type="radio" value="Audi"></input>
            Audi
        </label>
        <label>
            <input type="radio" value="Infinity"></input>
            Infinity
        </label>
        <label>
            <input type="radio" value="Voltswagon"></input>
            Voltswagon
        </label>
        <label>
            <input type="radio" value="Toyota"></input>
            Toyota
        </label>
        <label>
            <input type="radio" value="Ford"></input>
            Ford
        </label>
        <label>
            <input type="radio" value="Chevrolet"></input>
            Chevrolet
        </label>
        <label>
            <input type="radio" value="Ferrari"></input>
            Ferrari
        </label>
        <label>
            <input type="radio" value="Subaru"></input>
            Subaru
        </label>
    </Form>
    )
}
