import React from 'react';
import {Form} from 'formik'

export default function MusicList(props) {
    return (
        <Form>
        <h3>Music List</h3>
        <label>
            <input type="radio" value="Alternative"></input>
            Alternative
        </label>
        <label>
            <input type="radio" value="Hip Hop"></input>
            Hip Hop
        </label>
        <label>
            <input type="radio" value="Rap"></input>
            Rap
        </label>
        <label>
            <input type="radio" value="Rock"></input>
            Rock
        </label>
        <label>
            <input type="radio" value="Metal"></input>
            Metal
        </label>
        <label>
            <input type="radio" value="Oldies"></input>
            Oldies
        </label>
        <label>
            <input type="radio" value="Punk"></input>
            Punk
        </label>
        <label>
            <input type="radio" value="Classic Rock"></input>
            Classic Rock
        </label>
        <label>
            <input type="radio" value="Blues"></input>
            Blues
        </label>
    </Form>
    )
}
