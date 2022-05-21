import React from 'react';

import styles from './GoalItem.module.css';

const GoalItem = (props) => {

  const deleteGoal = (event) => {
    props.deleteGoalHandler(props.id);
  }


  return <li onClick={deleteGoal} className={styles['goal-item']}>{props.children}</li>;
};

export default GoalItem;