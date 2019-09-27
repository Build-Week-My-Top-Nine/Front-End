import React, { useState, useEffect } from "react";
import { Form } from "formik";
import axios from "axios";
export default function BGList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");

  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("boardGames", chosen)

    axios
      .post("https://mytopnineapi.herokuapp.com/api/topnine", {
        "UserName": "Sarah",
        "Rank": 3,
        "TopNineItem": chosen,
        "Category": "Board Game",
      } )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }, [chosen]);
  console.log("something", chosen);
  return (
    <Form onChange={handleChange}>
      <h3>Board Game List </h3>
      <label>
        <input
          name="Monopoly"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Monopoly
      </label>
      <label>
        <input
          name="Scrabble"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Scrabble
      </label>
      <label>
        <input
          name="Sorry"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Sorry
      </label>
      <label>
        <input
          name="Candy Land"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Candy Land
      </label>
      <label>
        <input
          name="Chess"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Chess
      </label>
      <label>
        <input
          name="Checkers"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Checkers
      </label>
      <label>
        <input
          name="Trouble"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Trouble
      </label>
      <label>
        <input
          name="Clue"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Clue
      </label>
      <label>
        <input
          name="Life"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Life
      </label>
    </Form>
  );
}
