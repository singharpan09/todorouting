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
      return state;

    default:
      return state;
  }
};

export default reducer;
