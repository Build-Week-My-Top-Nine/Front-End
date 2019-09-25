import React, {useState} from "react";
import { Form } from "formik";

export default function FoodList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const handleChange = e => {
      setRememberMe(!rememberMe);
//     if (rememberMe === true) {
//       setRememberMe(false);
//     } else {
//         setRememberMe(true);   
// }};
  }
console.log(rememberMe);
  return (
    <Form onChange={handleChange}>
      <h3>Food List</h3>
      <label>
        <input
          type="checkbox"
          value="Spaghetti"
        ></input>
        Spaghetti
      </label>
      <label>
        <input type="checkbox" value="Croissant" onChange={(e) => setRememberMe(e.target.value)}></input>
        Croissant
      </label>
      <label>
        <input type="checkbox" value="Stew" onChange={(e) => setRememberMe(e.target.value)}></input>
        Stew
      </label>
      <label>
        <input type="checkbox" value="Seafood" onChange={(e) => setRememberMe(e.target.value)}></input>
        Seafood
      </label>
      <label>
        <input type="checkbox" value="Stuffed Peppers" onChange={(e) => setRememberMe(e.target.value)}></input>
        Stuffed Peppers
      </label>
      <label>
        <input type="checkbox" value="Tostones" onChange={(e) => setRememberMe(e.target.value)}></input>
        Tostones
      </label>
      <label>
        <input type="checkbox" value="Tacos" onChange={(e) => setRememberMe(e.target.value)}></input>
        Tacos
      </label>
      <label>
        <input type="checkbox" value="Chili" onChange={(e) => setRememberMe(e.target.value)}></input>
        Chili
      </label>
      <label>
        <input type="checkbox" value="Orange Chicken" onChange={(e) => setRememberMe(e.target.value)}></input>
        Orange Chili
      </label>
    </Form>
  );
}
