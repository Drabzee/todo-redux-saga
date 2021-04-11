import { all } from 'redux-saga/effects';

import watchTodos from './watchTodos';
import watchUsers from './watchUsers';

export default function* rootSaga() {
  yield all([
    watchTodos(),
    watchUsers()
  ]);
}