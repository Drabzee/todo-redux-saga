import { connectRoutes } from 'redux-first-router';
import { ROUTES } from '../constants';

const mapRoutes = {
  [ROUTES.HOME]: '/',
  [ROUTES.USERS]: '/users',
  [ROUTES.TODOS]: '/todos',
  [ROUTES.TODO]: '/todos/:id'
};

export default connectRoutes(mapRoutes);