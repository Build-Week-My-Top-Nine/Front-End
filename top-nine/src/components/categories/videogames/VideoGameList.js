import React, { useState, useEffect } from "react";
import { Form } from "formik";

export default function VGList(props) {
  const [rememberMe, setRememberMe] = useState(false);
  const [chosen, setChosen] = useState("");
  const handleChange = e => {
    setRememberMe(e.target.value);
    setChosen(e.target.name);
  };
  useEffect(( )=>{
    props.handleChange("videoGames", chosen)

  }, [chosen]);

  console.log(chosen);
  return (
    <Form onChange={handleChange}>
      <h3>Video Games List</h3>
      <label>
        <input
          name="World of Warcraft"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        World of Warcraft
      </label>
      <label>
        <input
          name="Dungeons and Dragons"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Dungeons and Dragons
      </label>
      <label>
        <input
          name="Call of Duty"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Call of Duty
      </label>
      <label>
        <input
          name="Resident Evil"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Resident Evil
      </label>
      <label>
        <input
          name="Spyro"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Spyro
      </label>
      <label>
        <input
          name="The Walking Dead"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        The Walking Dead
      </label>
      <label>
        <input
          name="Mario Kart"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Mario Kart
      </label>
      <label>
        <input
          name="PAC-MAN"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        PAC-MAN
      </label>
      <label>
        <input
          name="Minecraft"
          type="checkbox"
          onChange={e => setRememberMe(e.target.value)}
        ></input>
        Minecraft
      </label>
    </Form>
  );
}
