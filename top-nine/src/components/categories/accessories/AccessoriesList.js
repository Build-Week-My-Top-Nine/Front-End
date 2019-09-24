import React from "react";
import { Form } from "formik";
export default function AccessList(props) {
    // state = {
    //     rememberMe: false
    // };
  
    // handleCheck = (event => {
    //   this.setState({
    //     rememberMe: event.target.checked
    //   });
    // });

    // checked={this.state.rememberMe}
    // onChange={this.handleCheck}

  return (
    <Form>
      <h3>Accessories List</h3>
      <label>
        <input
          type="checkbox"
          value="Watch"
          
        ></input>
        Watch
      </label>
      <label>
        <input
          type="checkbox"
          value="Sun Glasses"
        ></input>
        Sun Glasses
      </label>
      <label>
        <input
          type="checkbox"
          value="Purse"
        ></input>
        Purse
      </label>
      <label>
        <input
          type="checkbox"
          value="Satchel"
        ></input>
        Satchel
      </label>
      <label>
        <input
          type="checkbox"
          value="Earings"
        ></input>
        Earings
      </label>
      <label>
        <input
          type="checkbox"
          value="Bottle Opener"
        ></input>
        Bottle Opener
      </label>
      <label>
        <input
          type="checkbox"
          value="Knife"
        ></input>
        Knife
      </label>
      <label>
        <input
          type="checkbox"
          value="Pepper Spray"
        ></input>
        Purse Spray
      </label>
      <label>
        <input
          type="checkbox"
          value="Rings"
        ></input>
        Rings
      </label>
    </Form>
  );
}
