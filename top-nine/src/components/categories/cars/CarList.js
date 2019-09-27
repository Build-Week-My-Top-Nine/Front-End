import React, { useState, useEffect } from "react";
import { Form } from "formik";
import axios from "axios";
export default function CarList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");
  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("cars", chosen)

    axios
    .post("https://mytopnineapi.herokuapp.com/api/topnine", {
      "UserName": "Bob",
      "Rank": 1,
      "TopNineItem": chosen,
      "Category": "Cars",
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
      <h3>Car List</h3>
      <label>
        <input
          name="Lamborghini"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Lamborghini
      </label>
      <label>
        <input
          name="Audi"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Audi
      </label>
      <label>
        <input
          name="Infinity"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Infinity
      </label>
      <label>
        <input
          name="Voltswagon"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Voltswagon
      </label>
      <label>
        <input
          name="Toyota"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Toyota
      </label>
      <label>
        <input
          name="Ford"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Ford
      </label>
      <label>
        <input
          name="Chevrolet"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Chevrolet
      </label>
      <label>
        <input
          name="Ferrari"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Ferrari
      </label>
      <label>
        <input
          name="Subaru"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Subaru
      </label>
    </Form>
  );
}
