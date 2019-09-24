import React from 'react';
import {Form} from 'formik'

export default function VGList(props) {
    return (
        <Form>
        <h3>Video Games List</h3>
        <label>
            <input type="radio" value="World of Warcraft"></input>
            World of Warcraft
        </label>
        <label>
            <input type="radio" value="Dungeons and Dragons"></input>
            Dungeons and Dragons
        </label>
        <label>
            <input type="radio" value="Call of Duty"></input>
            Call of Duty
        </label>
        <label>
            <input type="radio" value="Resident Evil"></input>
            Resident Evil
        </label>
        <label>
            <input type="radio" value="Spyro"></input>
            Spyro
        </label>
        <label>
            <input type="radio" value="The Walking Dead"></input>
            The Walking Dead
        </label>
        <label>
            <input type="radio" value="Mario Kart"></input>
            Mario Kart
        </label>
        <label>
            <input type="radio" value="PAC-MAN"></input>
            PAC-MAN
        </label>
        <label>
            <input type="radio" value="Minecraft"></input>
            Minecraft
        </label>
    </Form>
    )
}
