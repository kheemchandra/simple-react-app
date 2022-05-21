import React, { useState } from "react";

import Button from "../Button/Button";

import "./NewGoal.css";

const NewGoal = (props) => {

  const [isValid, setIsValid] = useState(true);

  const addGoal = (event) => {
    event.preventDefault();
    let text = event.target.elements['goal'].value.trim();
    if(!text){
      setIsValid(false);
      return;
    }
    props.addGoalHandler(text);
  }

  const changeIsValid = (event) => {
    setIsValid(true);
  };

  return (
    <form className="form" onSubmit={addGoal}>
      <div className={`form-control ${!isValid && 'invalid'}`}>
        <label htmlFor="goal">Course Goal</label>
        <input onChange={changeIsValid} id="goal" type="text" />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default NewGoal;
