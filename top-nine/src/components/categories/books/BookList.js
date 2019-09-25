import React from 'react';
import {Form} from 'formik'

export default function BookList(props) {
    return (
        <Form>
        <h3>Book List</h3>
        <label>
            <input type="radio" value="Harry Potter"></input>
            Harry Potter
        </label>
        <label>
            <input type="radio" value="Twilight"></input>
            Twilight
        </label>
        <label>
            <input type="radio" value="50 Shades of Gray"></input>
            50 Shades of Gray
        </label>
        <label>
            <input type="radio" value="Eragon"></input>
            Eragon
        </label>
        <label>
            <input type="radio" value="IT"></input>
            IT
        </label>
        <label>
            <input type="radio" value="The Client"></input>
            The Client
        </label>
        <label>
            <input type="radio" value="Vampire Diaries"></input>
            Vampire Diaries
        </label>
        <label>
            <input type="radio" value="A Dogs Purpose"></input>
            A Dogs Purpose
        </label>
        <label>
            <input type="radio" value="The 5 People you Meet in Heaven"></input>
            The 5 People you Meet in Heaven
        </label>
    </Form>
    )
}
