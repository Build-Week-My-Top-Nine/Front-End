import React from 'react';
import VGList from './VideoGameList'
import { Link } from 'react-router-dom'

function VideoGame(props) {
return (
    <div>
        <h1>Video Game</h1>
        <VGList />
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default VideoGame;
