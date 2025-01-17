import React, { useState, useEffect } from "react";
import { Form } from "formik";
import axios from "axios";
export default function PlaceList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");
  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("places", chosen)

    axios
    .post("https://mytopnineapi.herokuapp.com/api/topnine", {
      "UserName": "Sarah",
      "Rank": 10,
      "TopNineItem": chosen,
      "Category": "Place",
    } )
    .then(res => {
      console.log(res);
      // console.log(res.data);
    })
    .catch(err => {
      console.log("ERROR", err);
    });
  }, [chosen]);

  console.log(chosen);
  return (
    <Form onChange={handleChange}>
      <h3>Places List</h3>
      <label>
        <input
          name="Italy"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Italy
      </label>
      <label>
        <input
          name="France"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        France
      </label>
      <label>
        <input
          name="Ireland"
          type="radio"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Ireland
      </label>
      <label>
        <input
          name="Portugal"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Portugal
      </label>
      <label>
        <input
          name="Poland"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Poland
      </label>
      <label>
        <input
          name="Dominican Republic"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Dominican Republic
      </label>
      <label>
        <input
          name="Mexico"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Mexico
      </label>
      <label>
        <input
          name="Spain"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Spain
      </label>
      <label>
        <input
          name="Asia"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Asia
      </label>
    </Form>
  );
}
