import * as actions from "./actionTypes";

export const todoAdded = (description) => {
  return {
    type: actions.TODO_ADDED,
    payload: {
      description: description,
    },
  };
};

export const todoCompleted = (todo) => {
  return {
    type: actions.TODO_COMPLETED,
    payload: {
      id: todo.id,
      description: todo.description,
      completed: todo.completed,
    },
  };
};
