import React, { useState, useContext, useCallback } from "react";
import { TodoContext } from "./TodoContext";
import styles from "../styles/Todo.module.css";

export const NewTodo = () => {
  const [name, setName] = useState("");
  const { addTodo } = useContext(TodoContext);
  const autoFocus = useCallback((el) => (el ? el.focus() : null), []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(name);
    setName("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Todo name"
        onChange={(event) => setName(event.target.value)}
        value={name}
        name="name"
        ref={autoFocus}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};
