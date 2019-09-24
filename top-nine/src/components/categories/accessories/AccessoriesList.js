import React from 'react';
import {Form} from 'formik'
export default function AccessList(props) {
    return (
        <Form>
            <h3>Accessories List</h3>
            <label>
                <input type="radio" value="Watch"></input>
                Watch
            </label>
            <label>
                <input type="radio" value="Sun Glasses"></input>
                Sun Glasses
            </label>
            <label>
                <input type="radio" value="Purse"></input>
                Purse
            </label>
            <label>
                <input type="radio" value="Satchel"></input>
                Satchel
            </label>
            <label>
                <input type="radio" value="Earings"></input>
                Earings
            </label>
            <label>
                <input type="radio" value="Bottle Opener"></input>
                Bottle Opener
            </label>
            <label>
                <input type="radio" value="Knife"></input>
                Knife
            </label>
            <label>
                <input type="radio" value="Pepper Spray"></input>
                Purse Spray
            </label>
            <label>
                <input type="radio" value="Rings"></input>
                Rings
            </label>
        </Form>
    )
}
