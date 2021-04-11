import { USERS } from '../constants';

const initialState = {
  currentUser: null,
  isLoading: false,
  data: { byId: {}, allIds: [] },
  error: ""
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case USERS.LOAD: return {
      ...state,
      isLoading: true,
      error: ""
    };

    case USERS.SUCCESS: return {
      ...state,
      currentUser: action.users.allIds[0],
      isLoading: false,
      data: action.users,
      error: ""
    }

    case USERS.FAIL: return {
      ...state,
      isLoading: false,
      error: action.error
    }

    case USERS.CHANGE_CURRENT_USER: return {
      ...state,
      currentUser: parseInt(action.id)
    }

    default: return state;
  }
}

export default usersReducer;