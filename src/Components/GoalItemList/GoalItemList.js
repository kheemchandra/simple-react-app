import React from "react";

import GoalItem from "../GoalItem/GoalItem";

import styles from "./GoalItemList.module.css";

const GoalItemList = (props) => {
  let content = props.children.map((goalItem) => {
    return (
      <GoalItem deleteGoalHandler={props.deleteGoalHandler} key={goalItem.key} id={goalItem.key}>
        {goalItem.text}
      </GoalItem>
    );
  });

  if(!content.length){
    content = <p style={{textAlign: 'center', marginTop: '0'}}>No goals found. Maybe add one?</p>
  }

  return <ul className={styles["goal-items-list"]}>{content}</ul>;
};

export default GoalItemList;
