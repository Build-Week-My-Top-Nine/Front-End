import React, { useState, useEffect } from "react";
import { Form } from "formik";
import axios from "axios";


export default function AnimalList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");

  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("animals", chosen)

    axios
      .post("https://mytopnineapi.herokuapp.com/api/topnine", {
        "UserName": "Sarah",
        "Rank": 2,
        "TopNineItem": chosen,
        "Category": "Animal",
      } )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }, [chosen]);
  console.log(chosen);
  return (
    <Form onChange={handleChange}>
      <h3>Animal List</h3>
      <label>
        <input
          name="Cat"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Cat
      </label>
      <label>
        <input
          name="Dog"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Dog
      </label>
      <label>
        <input
          name="Mouse"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Mouse
      </label>
      <label>
        <input
          name="Tiger"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Tiger
      </label>
      <label>
        <input
          name="Shark"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Shark
      </label>
      <label>
        <input
          name="Orca"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Orca
      </label>
      <label>
        <input
          name="Squirell"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Squirell
      </label>
      <label>
        <input
          name="Monkey"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Monkey
      </label>
      <label>
        <input
          name="Giraffe"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        GIraffe
      </label>
    </Form>
  );
}
