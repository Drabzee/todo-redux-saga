import { ROUTES } from "../constants";

const componenents = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.TODOS]: 'Todos',
  [ROUTES.TODO]: 'Todo',
  [ROUTES.USERS]: 'Users'
};

const pageReducer = (state = 'Home', action = {}) => componenents[action.type] || state;

export default pageReducer;