import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import styled from 'styled-components';
import axios from 'axios';


function WelcomePage(props) {
  console.log(props, "Props");
  // const [category, newCategory] = useState();

const UserSideDiv = styled.div`
    text-align: left;
    width: 25%;
    margin: 2rem;
    display: flex;
    flex-direction: column;
`

const UserCatBody = styled.div`
    background-color: white;
    border-radius: 2rem;
    color: orange;
    height: 20rem;
    width: 69%;
    margin: 1rem;
    margin-left: 20rem;
    position: absolute;
    top: 30%;
`

  //   };

  const img =
    "data:image/png;base64,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";

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://mytopnineapi.herokuapp.com/api/topnine").then(res => {
      setUser(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
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
            <img className="userPic" src={img} alt="user img" />
            <h2 user={user.UserName}>{user.UserName || 'User Name'}</h2>
            </UserSideDiv>
            <UserCatBody>THIS IS A TEXT</UserCatBody>

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

        </div>
    )
}

export default WelcomePage;
