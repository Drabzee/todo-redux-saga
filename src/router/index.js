import { connectRoutes } from 'redux-first-router';
import { ROUTES } from '../constants';

const mapRoutes = {
  [ROUTES.HOME]: '/',
  [ROUTES.USERS]: '/users',
  [ROUTES.TODOS]: '/todos',
  [ROUTES.TODO]: '/todos/:id'
};

export default connectRoutes(mapRoutes, {
  basename:  process.env.NODE_ENV === 'development' ? '' : 'todo-redux-saga',
  title: state => {
    const id = state.location.payload.id ?? '';
    return `${state.page} ${id} | Todo App`
  }
});