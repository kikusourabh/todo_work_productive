import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETE_TASK,
  IN_COMPLETE_TASK,
} from '../Types/TaskType';

const initialstate = {
  Tasks: [],
};

const TaskReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        Tasks: state?.Tasks?.concat(action.task),
      };

    case DELETE_TASK:
      return {
        ...state,
        Tasks: state?.Tasks?.filter((val) => val.id != action.task_id),
      };

    case COMPLETE_TASK:
      return {
        Tasks: state.Tasks.map((item) =>
          item.id === action.task_id ? {...item, task_status: true} : item,
        ),
      };
    case IN_COMPLETE_TASK:
      return {
        Tasks: state.Tasks.map((item) =>
          item.id === action.task_id ? {...item, task_status: false} : item,
        ),
      };

    default:
      return state;
  }
};

export default TaskReducer;
