import { ActionObject, TodoInterface } from "../interfaces";
import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";

const initialState: Array<TodoInterface> = [];

export const todoReducer = (state = initialState, action: ActionObject) => {
  if (action.type === ADD_TODO) {
    return [action.payload, ...state];
  }

  if (action.type === TOGGLE_COMPLETED) {
    return state.map((todo) => {
      if (todo.id !== action.payload.id) return todo;
      return { ...todo, completed: !todo.completed };
    });
  }

  return state;
};
