import React from 'react';
import {Form} from 'formik'

export default function PlaceList(props) {
    return (
        <Form>
        <h3>Places List</h3>
        <label>
            <input type="radio" value="Italy"></input>
            Italy
        </label>
        <label>
            <input type="radio" value="France"></input>
            France
        </label>
        <label>
            <input type="radio" value="Ireland"></input>
            Ireland
        </label>
        <label>
            <input type="radio" value="Portugal"></input>
            Portugal
        </label>
        <label>
            <input type="radio" value="Poland"></input>
            Poland
        </label>
        <label>
            <input type="radio" value="Dominican Republic"></input>
            Dominican Republic
        </label>
        <label>
            <input type="radio" value="Mexico"></input>
            Mexico
        </label>
        <label>
            <input type="radio" value="Spain"></input>
            Spain
        </label>
        <label>
            <input type="radio" value="Asia"></input>
            Asia
        </label>
    </Form>
    )
}
