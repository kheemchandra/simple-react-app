import React from "react";

// import styled from "styled-components";
import styles from './Button.module.css';

// const Button = styled.button`
//   background: #7a0752;
//   width: 100%;
//   color: white;
//   padding: 10px 25px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;
//   outline: none;

//   &:hover {
//     background: #a5096f;
//     box-shadow: 0 0 15px 1px rgb(226, 223, 223);
//   }

//   @media (min-width: 768px){
//     width: auto;
//   }
// `;



const Button = (props) => {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
