import React from 'react';
import MusicList from './MusicList'
import { Link } from 'react-router-dom'

function Music(props) {
return (
    <div>
        <h1>Music</h1>
        <MusicList />
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default Music;
