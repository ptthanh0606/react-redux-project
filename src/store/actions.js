import { ADD_TASK, EDIT_TASK } from "./actionTypes";

export const addTask = (data) => ({
  type: ADD_TASK,
  payload: data,
});

export const editTask = (data) => ({
  type: EDIT_TASK,
  payload: data,
});
