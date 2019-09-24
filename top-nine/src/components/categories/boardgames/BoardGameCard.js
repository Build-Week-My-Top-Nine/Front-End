import React from 'react';
import BGList from './BoardGameList'
import { Link } from 'react-router-dom'

function BoardGame (props) {
return (
    <div>
        <h1>Board Games</h1>
        <BGList />
        <Link to="/"><h6>Back</h6></Link>
    </div>
)
}


export default BoardGame;
