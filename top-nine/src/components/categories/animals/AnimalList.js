import React from 'react';
import {Form} from 'formik'

export default function AnimalList(props) {
    return (
        <Form>
        <h3>Animal List</h3>
        <label>
            <input type="radio" value="Cat"></input>
            Cat
        </label>
        <label>
            <input type="radio" value="Dog"></input>
            Dog
        </label>
        <label>
            <input type="radio" value="Mouse"></input>
            Mouse
        </label>
        <label>
            <input type="radio" value="Tiger"></input>
            Tiger
        </label>
        <label>
            <input type="radio" value="Shark"></input>
            Shark
        </label>
        <label>
            <input type="radio" value="Orca"></input>
            Orca
        </label>
        <label>
            <input type="radio" value="Squirell"></input>
            Squirell
        </label>
        <label>
            <input type="radio" value="Monkey"></input>
            Monkey
        </label>
        <label>
            <input type="radio" value="GIraffe"></input>
            GIraffe
        </label>
    </Form>
    )
}
