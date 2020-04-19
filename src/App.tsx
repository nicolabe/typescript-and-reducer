import React from "react";
import styles from "./styles/App.module.css";
import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>ToDo List</h1>
        <p className={styles.description}>My awesome list of todos</p>
        <NewTodo />
        <Todos />
      </header>
    </div>
  );
}

export default App;
