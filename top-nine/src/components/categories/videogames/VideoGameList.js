import React, { useState } from "react";
import { Form } from "formik";

export default function VGList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const handleChange = e => {
    setRememberMe(!rememberMe);
  };
  console.log(rememberMe);
  return (
    <Form onChange={handleChange}>
      <h3>Video Games List</h3>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        World of Warcraft
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Dungeons and Dragons
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Call of Duty
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Resident Evil
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Spyro
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        The Walking Dead
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Mario Kart
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        PAC-MAN
      </label>
      <label>
        <input
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Minecraft
      </label>
    </Form>
  );
}
