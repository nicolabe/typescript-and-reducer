import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import styles from "../styles/Todo.module.css";
import { Todo } from "./Todo";

export const Todos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};
