import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import styled from 'styled-components';

import Accessories from './categories/accessories/AccessoriesCard'

const UserSideDiv = styled.div`
    text-align: left;
    width: 25%;
    margin: 2rem;
    margin-right: 0;
`

const UserCatBody = styled.div`
    background-color: white;
    border-radius: 2rem;
    color: orange;
    height: 20rem;
    width: 75%
`

function WelcomePage(props) {
    console.log(props, "Props")
    // const [category, newCategory] = useState();

    // const handleClick = event => {
    //     event.preventDefault();
        
    //   };

    return (
        <div class="welcome">
            <div className="user-topnine">
                <div className="user-cat">
                        <p>My Top Nine:</p>
                        <NavLink className="usernav" to='/accessories'>Accessories</NavLink>
                        <NavLink className="usernav" to='/animals'>Animals</NavLink>
                        <NavLink className="usernav" to='/boardgames'>Board Games</NavLink>
                        <NavLink className="usernav" to='/books'>Books</NavLink>
                        <NavLink className="usernav" to='/car'>Cars</NavLink>
                        <NavLink className="usernav" to='/food'>Food</NavLink>
                        <NavLink className="usernav" to='/movies'>Movies</NavLink>
                        <NavLink className="usernav" to='/music'>Music</NavLink>
                        <NavLink className="usernav" to='/places'>Places</NavLink>
                        <NavLink className="usernav" to='/videogame'>Video Games</NavLink>      
            </div>
            <UserSideDiv className="user-sidebar">
                <h1>User IMG Placeholder</h1>
                <h2>User Name</h2>
            </UserSideDiv>
            
        </div>

        <section className="other-user-topnine">
            <div className="other-user-cat">
                        <p>Their Top Nine:</p>
                        <NavLink className="usernav" to='/accessories/:id'>Accessories</NavLink>
                        <NavLink className="usernav" to='/animals/:id'>Animals</NavLink>
                        <NavLink className="usernav" to='/boardgames/:id'>Board Games</NavLink>
                        <NavLink className="usernav" to='/books/:id'>Books</NavLink>
                        <NavLink className="usernav" to='/car/:id'>Cars</NavLink>
                        <NavLink className="usernav" to='/food/:id'>Food</NavLink>
                        <NavLink className="usernav" to='/movies/:id'>Movies</NavLink>
                        <NavLink className="usernav" to='/music/:id'>Music</NavLink>
                        <NavLink className="usernav" to='/places/:id'>Places</NavLink>
                        <NavLink className="usernav" to='/videogame/:id'>Video Games</NavLink>      
            </div>
        </section>
        </div>
    )
}

export default WelcomePage;
