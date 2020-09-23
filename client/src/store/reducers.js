import _ from "lodash";
import types from "./constants";

const initialState = {
  origin: [],
};

const TodoReducers = {
  [types.GET_SUCCESS]: (state, action) => ({
    ...state,
    origin: action.payload,
  }),
  [types.CREATE_SUCCESS]: (state, action) => {
    const newTodo = action.payload;
    const prevOrigin = [...state.origin];

    return {
      ...state,
      origin: [...prevOrigin, newTodo],
    };
  },
  [types.DELETE_SUCCESS]: (state, action) => {
    const deleteTodo = action.payload;
    const prevOrigin = [...state.origin];
    const newOrigin = _.filter(
      prevOrigin,
      (item) => item._id !== deleteTodo._id
    );

    return { ...state, origin: [...newOrigin] };
  },
};

const Todo = (state = initialState, action) => {
  const reducers = TodoReducers[action.type];

  if (!reducers) {
    return state;
  }
  return reducers(state, action);
};

export default Todo;
