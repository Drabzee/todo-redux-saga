import { connect } from 'react-redux';
import TodoFrom from '../components/TodoForm';
import { todosUpdateReq } from '../actions';

const mapStateToProps = ({ location, todos, users }) => {
  const id = location.payload.id;
  return {
    isLoading: todos.isLoading || users.isLoading,
    id: id,
    todo: todos.data.byId[id],
    user:
      users.data.allIds.length && todos.data.allIds.length
        ? users.data.byId[todos.data.byId[id].userId]
        : null,
  };
};

const mapDispatchToProps = (dispatch) => ({
  formSubmitAction: (data, id) => dispatch(todosUpdateReq(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFrom);