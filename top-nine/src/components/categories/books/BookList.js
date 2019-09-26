import React, { useState, useEffect } from "react";
import { Form } from "formik";

export default function BookList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");

  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("books", chosen)

  }, [chosen]);

  console.log(chosen);
  return (
    <Form onChange={handleChange}>
      <h3>Book List</h3>
      <label>
        <input
          name="Harry Potter"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Harry Potter
      </label>
      <label>
        <input
          name="Twilight"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Twilight
      </label>
      <label>
        <input
          name="50 Shades of Gray"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        50 Shades of Gray
      </label>
      <label>
        <input
          name="Eragon"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Eragon
      </label>
      <label>
        <input
          name="IT"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        IT
      </label>
      <label>
        <input
          name="The Client"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        The Client
      </label>
      <label>
        <input
          name="Vampire Diaries"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Vampire Diaries
      </label>
      <label>
        <input
          name="A Dogs Purpose"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        A Dogs Purpose
      </label>
      <label>
        <input
          name="The 5 People you Meer in Heaven"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        The 5 People you Meet in Heaven
      </label>
    </Form>
  );
}
