import React, { useState, useEffect } from "react";
import { Form } from "formik";

export default function MovieList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");
  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("movies", chosen)

  }, [chosen]);

  console.log(chosen);
  return (
    <Form onChange={handleChange}>
      <h3>Movie List</h3>
      <label>
        <input
          name="Horror"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Horror
      </label>
      <label>
        <input
          name="Comedy"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Comedy
      </label>
      <label>
        <input
          name="Romantic"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Romantic
      </label>
      <label>
        <input
          name="Family Friendly"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Family Friendly
      </label>
      <label>
        <input
          name="Cartoon"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Cartoon
      </label>
      <label>
        <input
          name="Animal"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Animal
      </label>
      <label>
        <input
          name="Silent"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Silent
      </label>
      <label>
        <input
          name="Fiction"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Fiction
      </label>
      <label>
        <input
          name="Non Fiction"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Non Fiction
      </label>
    </Form>
  );
}
