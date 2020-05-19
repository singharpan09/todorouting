import * as actions from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TODO_ADDED:
      return [
        ...state,
        {
          id: Date.now(),
          description: action.payload.description,
          completed: false,
        },
      ];
    case actions.TODO_COMPLETED:
      return state.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : todo.completed === true
          ? { ...todo, completed: false }
          : { ...todo, completed: true }
      );

    default:
      return state;
  }
};

export default reducer;
