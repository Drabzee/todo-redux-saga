import { TODOS } from '../constants';

const initialState = {
  isLoading: false,
  data: { byId: {}, allIds: [] },
  error: ""
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case TODOS.UPDATE_REQ:
    case TODOS.LOAD: return {
      ...state,
      isLoading: true,
      error: ""
    };

    case TODOS.SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.todos,
      error: ""
    }

    case TODOS.FAIL: return {
      ...state,
      isLoading: false,
      error: action.error
    }

    case TODOS.UPDATE_RES: return {
      ...state,
      isLoading: false,
      error: "",
      data: { byId: {...state.data.byId, [action.todo.id]: action.todo}, allIds: [...state.data.allIds]}
    }

    default: return state;
  }
}

export default todosReducer;