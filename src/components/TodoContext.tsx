import React, { FunctionComponent, useReducer, createContext } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";
import { TodoContextInterface, TodoInterface } from "../interfaces";

export const TodoContext = createContext({} as TodoContextInterface);

export const TodoWrapper: FunctionComponent = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (name: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch({
      type: ADD_TODO,
      payload: {
        id: id,
        name: name,
        description: "desc",
        completed: false,
      },
    });
  };

  const toggleCompleted = (id: string) => {
    const todo: TodoInterface = todos.filter((t) => t.id === id)[0];
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: { ...todo },
    });
  };

  const value = { todos, addTodo, toggleCompleted };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
