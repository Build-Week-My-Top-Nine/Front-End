import React, {useState} from "react";
import { Form } from "formik";
export default function AccessList(props) {
   const [rememberMe, setRememberMe] = useState(false && true);
    const handleChange = (e) => {
        e.preventDefault();
            if (rememberMe == true) {
                console.log(true);
            } else {
                console.log(false);
            }
    }
  return (
    <Form onChange={handleChange}>
      <h3>Accessories List</h3>
      <label >
        <input
          type="checkbox"
          value="Watch"
          onChange={(e) => setRememberMe(e.target.value)}        ></input>
        Watch
      </label>
      <label>
        <input
          type="checkbox"
          value="Sun Glasses"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Sun Glasses
      </label>
      <label>
        <input
          type="checkbox"
          value="Purse"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Purse
      </label>
      <label>
        <input
          type="checkbox"
          value="Satchel"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Satchel
      </label>
      <label>
        <input
          type="checkbox"
          value="Earings"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Earings
      </label>
      <label>
        <input
          type="checkbox"
          value="Bottle Opener"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Bottle Opener
      </label>
      <label>
        <input
          type="checkbox"
          value="Knife"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Knife
      </label>
      <label>
        <input
          type="checkbox"
          value="Pepper Spray"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Purse Spray
      </label>
      <label>
        <input
          type="checkbox"
          value="Rings"
          onChange={(e) => setRememberMe(e.target.value)}
        ></input>
        Rings
      </label>
    </Form>
  );
}
