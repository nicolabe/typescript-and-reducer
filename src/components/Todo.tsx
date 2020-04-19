import React, { useContext } from "react";
import styles from "../styles/Todo.module.css";
import { TodoInterface } from "../interfaces";
import { TodoContext } from "./TodoContext";

export const Todo = ({ id, name, completed }: TodoInterface) => {
  const { toggleCompleted } = useContext(TodoContext);

  const toggleCheckbox = () => {
    toggleCompleted(id);
  };
  console.log(completed);
  return (
    <li className={styles.item}>
      <span>{name}</span>
      <span>
        <input type="checkbox" onChange={toggleCheckbox} checked={completed} />
      </span>
    </li>
  );
};
