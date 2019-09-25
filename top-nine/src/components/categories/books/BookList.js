import React, { useState } from "react";
import { Form } from "formik";

export default function BookList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const handleChange = e => {
    setRememberMe(!rememberMe);
  };
  console.log(rememberMe);
  return (
    <Form onChange={handleChange}>
      <h3>Book List</h3>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Harry Potter
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Twilight
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        50 Shades of Gray
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Eragon
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        IT
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        The Client
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Vampire Diaries
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        A Dogs Purpose
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        The 5 People you Meet in Heaven
      </label>
    </Form>
  );
}
