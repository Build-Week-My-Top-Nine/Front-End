import React, { useState, useEffect } from "react";
import { Form } from "formik";
import axios from "axios";

export default function AccessList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");

  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(() => {
    props.handleChange("accessories", chosen);

    axios
      .post("https://mytopnineapi.herokuapp.com/api/topnine", {
        "UserName": "Sarah",
        "Rank": 1,
        "TopNineItem": chosen,
        "Category": "accessories"
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
      <h3>Accessories List</h3>
      <label>
        <input
          name="Watch"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Watch
      </label>
      <label>
        <input
          name="Sun Glasses"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Sun Glasses
      </label>
      <label>
        <input
          name="Purse"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Purse
      </label>
      <label>
        <input
          name="Satchel"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Satchel
      </label>
      <label>
        <input
          name="Earings"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Earings
      </label>
      <label>
        <input
          name="Bottle Opener"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Bottle Opener
      </label>
      <label>
        <input
          name="Knife"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Knife
      </label>
      <label>
        <input
          name="Pepper Spray"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Pepper Spray
      </label>
      <label>
        <input
          name="Rings"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Rings
      </label>
    </Form>
  );
}
