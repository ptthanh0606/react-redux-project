import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from "../actionTypes";

const initalState = [];

const taskReducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case ADD_TASK:
      state = [...state, action.payload];
      return state;

    case EDIT_TASK:
      state = [...state, action.payload];
      return state;

    case REMOVE_TASK:
      return;

    default:
      return state;
  }
};

export default taskReducer;
