import TodoForm from '../components/TodoForm';
import { connect } from 'react-redux';
import { getIsLoading } from '../selectors';
import { todosAddReq } from '../actions';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  formSubmitAction: (data) => dispatch(todosAddReq(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);