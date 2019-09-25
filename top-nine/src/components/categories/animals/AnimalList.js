import React, { useState } from "react";
import { Form } from "formik";

export default function AnimalList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const handleChange = e => {
    setRememberMe(!rememberMe);
  };
  console.log(rememberMe);
  return (
    <Form onChange={handleChange}>
      <h3>Animal List</h3>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Cat
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Dog
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Mouse
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Tiger
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Shark
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Orca
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Squirell
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Monkey
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        GIraffe
      </label>
    </Form>
  );
}
