import { call, put, select, takeEvery } from "redux-saga/effects";
import { ROUTES, TODOS } from "../constants";
import { addTodo, fetchTodos, updateTodo } from '../api';
import { todosAddRes, todosFail, todosSuccess, todosUpdateRes } from '../actions';

function* handleTodos() {
  try {
    const todos = yield call(fetchTodos);
    yield put(todosSuccess(todos));
  } catch(err) {
    yield put(todosFail(err.toString()));
  }
}

function* handleTodoUpdateReq({ id, data }) {
  try {
    const todo = yield call(updateTodo, id, data);
    yield put(todosUpdateRes(todo));
  } catch(err) {}
}

function* handleTodoAddReq({ todo }) {
  try {
    const currentUserId = yield select(state => state.users.currentUser);
    const todoRes = yield call(addTodo, {...todo, userId: currentUserId});
    yield put(todosAddRes(todoRes));
  } catch(err) {}
}

function* redirectToTodos() {
  yield put({type: ROUTES.TODOS});
}

export default function* watchTodos() {
  yield takeEvery(TODOS.LOAD, handleTodos);
  yield takeEvery(TODOS.UPDATE_REQ, handleTodoUpdateReq);
  yield takeEvery(TODOS.UPDATE_RES, redirectToTodos);
  yield takeEvery(TODOS.ADD_REQ, handleTodoAddReq);
  yield takeEvery(TODOS.ADD_RES, redirectToTodos);
}