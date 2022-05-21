import React, { useState } from "react";

import NewGoal from "./Components/NewGoal/NewGoal";
import GoalItemList from "./Components/GoalItemList/GoalItemList";

function App() {
  let dummyGoals = [
    { key: "g1", text: "Finish the course!" },
    { key: "g2", text: "Do all exercises!" },
  ];

  const [goal, setGoal] = useState(dummyGoals);

  // const addGoalHandler = (text) => {
  //   setGoal((prevData) => {
  //     console.log(prevData);
  //     prevData.unshift({ key: Math.random().toString(), text: text });
  //     console.log('*************');
  //     console.log(prevData);
  //     return prevData;
  //   });
  // };

  const addGoalHandler = (text) => {
    setGoal((prevData) => {
      let updatedGoals = [...prevData];
      updatedGoals.unshift({ key: Math.random().toString(), text: text });
      return updatedGoals;
    });
  };

  const deleteGoalHandler = (goalId) => {
    setGoal((prevData) => {
      return prevData.filter((g) => g.key !== goalId);
    });
  };

  return (
    <div>
      <section>
        <NewGoal addGoalHandler={addGoalHandler} />
      </section>
      <section>
        <GoalItemList deleteGoalHandler={deleteGoalHandler}>
          {goal}
        </GoalItemList>
      </section>
    </div>
  );
}

export default App;
