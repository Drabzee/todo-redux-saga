import { TODOS, USERS } from '../constants';

export const todosLoad = () => ({
  type: TODOS.LOAD
});

export const todosSuccess = (todos) => ({
  type: TODOS.SUCCESS,
  todos
});

export const todosFail = (error) => ({
  type: TODOS.FAIL,
  error
});

export const todosAddReq = (todo) => ({
  type: TODOS.ADD_REQ,
  todo
});

export const todosAddRes = (todo) => ({
  type: TODOS.ADD_RES,
  todo
});

export const todosUpdateReq = (id, data) => ({
  type: TODOS.UPDATE_REQ,
  id, data
});

export const todosUpdateRes = (todo) => ({
  type: TODOS.UPDATE_RES,
  todo
});

export const usersLoad = () => ({
  type: USERS.LOAD
});

export const usersSuccess = (users) => ({
  type: USERS.SUCCESS,
  users
});

export const usersFail = (error) => ({
  type: USERS.FAIL,
  error
});

export const changeCurrentUser = (id) => ({
  type: USERS.CHANGE_CURRENT_USER,
  id
});