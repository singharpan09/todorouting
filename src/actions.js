import * as actions from "./actionTypes";

export const todoAdded = (description) => {
  return {
    type: actions.TODO_ADDED,
    payload: {
      description: description,
    },
  };
};

export const todoCompleted = (id) => {
  return {
    type: actions.TODO_COMPLETED,
    payload: {
      id: id,
    },
  };
};
