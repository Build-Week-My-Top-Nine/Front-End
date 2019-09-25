import React, { useState } from "react";
import { Form } from "formik";

export default function CarList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const handleChange = e => {
    setRememberMe(!rememberMe);
  };
  console.log(rememberMe);
  return (
    <Form onChange={handleChange}>
      <h3>Car List</h3>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Lamborghini
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Audi
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Infinity
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Voltswagon
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Toyota
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Ford
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Chevrolet
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Ferrari
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Subaru
      </label>
    </Form>
  );
}
