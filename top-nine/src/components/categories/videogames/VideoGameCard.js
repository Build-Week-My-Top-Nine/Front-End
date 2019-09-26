import React from 'react';
import VGList from './VideoGameList'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

function VideoGame(props) {
return (
    <div>
        <h1>Video Game</h1>
        <VGList handleChange={props.handleChange} />
        <Button><Link to="/">Back</Link></Button>
    </div>
)
}


export default VideoGame;
