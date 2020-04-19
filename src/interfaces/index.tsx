export interface TodoInterface {
  id: string,
  name: string,
  description: string,
  completed: boolean
};

export interface TodoContextInterface {
  todos: Array<TodoInterface>,
  addTodo(name: string): void
};

export interface ActionObject {
  type: string,
  payload: TodoInterface
};
