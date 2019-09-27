import React, { useState, useEffect } from "react";
import { Form } from "formik";
import axios from "axios";

export default function FoodList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");
  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(() => {
    props.handleChange("food", chosen);
    axios
      .post("https://mytopnineapi.herokuapp.com/api/topnine", {
       "UserName": "Sarah",
        "Rank": 6,
        "TopNineItem": chosen,
        "Category": "Food"
      })
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
        <input name="Croissant" type="checkbox" onChange={handleChange}></input>
        Croissant
      </label>
      <label>
        <input
          name="Stew"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Stew
      </label>
      <label>
        <input
          name="Seafood"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Seafood
      </label>
      <label>
        <input
          name="Stuffed Peppers"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Stuffed Peppers
      </label>
      <label>
        <input
          name="Tostones"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Tostones
      </label>
      <label>
        <input
          name="Tacos"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Tacos
      </label>
      <label>
        <input
          name="Chili"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Chili
      </label>
      <label>
        <input
          name="Orange Chicken"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Orange Chicken
      </label>
    </Form>
  );
}
