import { ActionObject, TodoInterface } from "../interfaces";
import { ADD_TODO } from "../actions";

const initialState: Array<TodoInterface> = [];

export const todoReducer = (state = initialState, action: ActionObject) => {
  if (action.type === ADD_TODO) {
    return [action.payload, ...state];
  }

  return state;
};
