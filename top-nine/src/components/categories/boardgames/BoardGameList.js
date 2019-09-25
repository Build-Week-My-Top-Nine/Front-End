import React from 'react';
import {Form} from 'formik'

export default function BGList(props) {
    return (
        <Form>
        <h3>Board Game List </h3>
        <label>
            <input type="radio" value="Monopoly"></input>
            Monopoly
        </label>
        <label>
            <input type="radio" value="Scrabble"></input>
            Scrabble
        </label>
        <label>
            <input type="radio" value="Sorry"></input>
            Sorry
        </label>
        <label>
            <input type="radio" value="Candy Land"></input>
            Candy Land
        </label>
        <label>
            <input type="radio" value="Chess"></input>
            Chess
        </label>
        <label>
            <input type="radio" value="Checkers"></input>
            Checkers
        </label>
        <label>
            <input type="radio" value="Trouble"></input>
            Trouble
        </label>
        <label>
            <input type="radio" value="Clue"></input>
            Clue
        </label>
        <label>
            <input type="radio" value="Life"></input>
            Life
        </label>
    </Form>    
    )
}
