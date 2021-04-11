import { call, put, takeEvery } from "redux-saga/effects";
import { ROUTES, TODOS } from "../constants";
import { fetchTodos, updateTodo } from '../api';
import { todosFail, todosSuccess, todosUpdateRes } from '../actions';

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

function* handleTodoUpdateRes() {
  yield put({type: ROUTES.TODOS});
}

export default function* watchTodos() {
  yield takeEvery(TODOS.LOAD, handleTodos);
  yield takeEvery(TODOS.UPDATE_REQ, handleTodoUpdateReq);
  yield takeEvery(TODOS.UPDATE_RES, handleTodoUpdateRes);
}