import { connect } from 'react-redux';
import Home from './components/Home';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Users from './components/Users';
import { Fragment } from 'react';

function App({ page }) {
  const components = { Home, Todos, Todo, Users };
  const Component = components[page];

  return (
    <Fragment>
      <Navbar />
      <Component />
    </Fragment>
  );
}

const mapStateToProps = ({page}) => ({page});

export default connect(mapStateToProps)(App);