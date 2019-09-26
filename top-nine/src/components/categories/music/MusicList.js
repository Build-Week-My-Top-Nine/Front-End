import React, { useState, useEffect } from "react";
import { Form } from "formik";

export default function MusicList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");
  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("music", chosen)

  }, [chosen]);

  console.log(chosen);
  return (
    <Form onChange={handleChange}>
      <h3>Music List</h3>
      <label>
        <input
          name="Alternative"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Alternative
      </label>
      <label>
        <input
          name="Hip Hop"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Hip Hop
      </label>
      <label>
        <input
          name="Rap"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Rap
      </label>
      <label>
        <input
          name="Rock"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Rock
      </label>
      <label>
        <input
          name="Metal"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Metal
      </label>
      <label>
        <input
          name="Oldies"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Oldies
      </label>
      <label>
        <input
          name="Punk"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Punk
      </label>
      <label>
        <input
          name="Classic Rock"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Classic Rock
      </label>
      <label>
        <input
          name="Blues"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Blues
      </label>
    </Form>
  );
}
