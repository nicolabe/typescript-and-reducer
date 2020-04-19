import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import styles from "../styles/Todo.module.css";

export const Todos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li className={styles.item} key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
