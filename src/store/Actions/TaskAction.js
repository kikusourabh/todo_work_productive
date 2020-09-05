import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETE_TASK,
  IN_COMPLETE_TASK,
} from '../Types/TaskType';

export const addTask = (task) => ({
  type: ADD_TASK,
  task: task,
});
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  task_id: id,
});
export const updateTask = (task) => ({
  type: UPDATE_TASK,
  task: task,
});
export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  task_id: id,
});
export const inCompleteTask = (id) => ({
  type: IN_COMPLETE_TASK,
  task_id: id,
});
