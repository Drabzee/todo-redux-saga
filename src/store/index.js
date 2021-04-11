import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { todosLoad, usersLoad } from '../actions';
import rootReducer from '../reducers';
import connectedRoutes from '../router';
import rootSaga from '../sagas';

const { middleware, enhancer } = connectedRoutes;

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(middleware, sagaMiddleware);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(enhancer, middlewares));

sagaMiddleware.run(rootSaga);

store.dispatch(usersLoad());
store.dispatch(todosLoad());

export default store;