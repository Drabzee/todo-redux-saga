import { call, put, takeEvery } from "redux-saga/effects";
import { USERS } from "../constants";
import { fetchUsers } from '../api';
import { usersFail, usersSuccess } from '../actions';

function* handleTodos() {
  try {
    const users = yield call(fetchUsers);
    yield put(usersSuccess(users));
  } catch(err) {
    yield put(usersFail(err.toString()));
  }
}

export default function* watchTodos() {
  yield takeEvery(USERS.LOAD, handleTodos);
}