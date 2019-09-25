import React, {useState} from "react";
import { Form } from "formik";
export default function AccessList(props) {
   const [rememberMe, setRememberMe] = useState(false);
      const handleChange = e => {
        setRememberMe(!rememberMe);
      }
      console.log(rememberMe);
  return (
    <Form onChange={handleChange}>
      <h3>Accessories List</h3>
      <label >
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}        ></input>
        Watch
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Sun Glasses
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Purse
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Satchel
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Earings
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Bottle Opener
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Knife
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Purse Spray
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Rings
      </label>
    </Form>
  );
}
