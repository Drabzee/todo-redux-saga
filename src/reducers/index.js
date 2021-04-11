import { combineReducers } from "redux";
import connectedRoutes from '../router';
import page from './pageReducer';
import todos from './todosReducer';
import users from './usersReducer';

const { reducer: location } = connectedRoutes;

export default combineReducers({page, location, todos, users});