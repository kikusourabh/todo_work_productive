import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETE_TASK,
  IN_COMPLETE_TASK,
} from '../Types/TaskType';

const initialstate = {
  incomeplete_task: [],
  complete_task: [],
};

const TaskReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        incomeplete_task: state?.incomeplete_task?.concat(action.task),
      };

    case DELETE_TASK:
      return {
        incomeplete_task: state?.incomeplete_task?.filter(
          (val) => val.id != action.task_id,
        ),
        complete_task: state?.complete_task?.filter(
          (val) => val.id != action.task_id,
        ),
      };

    default:
      return state;
  }
};

export default TaskReducer;
