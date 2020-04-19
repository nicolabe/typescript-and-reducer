import React, { FunctionComponent, useReducer, createContext } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { ADD_TODO } from "../actions";
import { TodoContextInterface } from "../interfaces";

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

  const value = { todos, addTodo };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
