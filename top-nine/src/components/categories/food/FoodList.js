import React, { useState, useEffect } from "react";
import { Form } from "formik";

export default function FoodList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");
  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("food", chosen)

  }, [chosen]);

  console.log(chosen);

  return (
    <Form onChange={handleChange}>
      <h3>Food List</h3>
      <label>
        <input
          name="Spaghetti"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Spaghetti
      </label>
      <label>
        <input type="checkbox" onChange={handleChange}></input>
        Croissant
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Stew
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Seafood
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Stuffed Peppers
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Tostones
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Tacos
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Chili
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Orange Chicken
      </label>
    </Form>
  );
}
