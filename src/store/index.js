import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { todosLoad, usersLoad } from '../actions';
import rootReducer from '../reducers';
import connectedRoutes from '../router';
import rootSaga from '../sagas';

const { middleware, enhancer } = connectedRoutes;

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(middleware, sagaMiddleware);
const enhancers = compose(enhancer, middlewares, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

store.dispatch(usersLoad());
store.dispatch(todosLoad());

export default store;