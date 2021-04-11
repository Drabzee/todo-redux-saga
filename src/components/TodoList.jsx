import { connect } from "react-redux";
import Link from "redux-first-router-link";
import { todosUpdateReq } from "../actions";
import { ROUTES } from "../constants";
import { makeGetSelectedTodos } from "../selectors";

const TodoList = ({ title, todos, todosUpdateReq }) => {

  const handleCheckbox = async (event, title) => {
    if (window.confirm("Are you sure to change status of this todo?")) {
      todosUpdateReq(event.target.value, {
        title,
        completed: event.target.checked,
      });
    }
  };

  return todos.length > 0 ? (
    <div className="todo-list">
      <h3 className="ms-2">{title}</h3>
      <ul className="list-group mt-3">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex flex-row">
            <input
              onChange={(event) => handleCheckbox(event, todo.title)}
              className="form-check-input me-3"
              type="checkbox"
              value={todo.id}
              checked={todo.completed}
            />
            <Link
              style={{ flex: 1, textDecoration: "none", color: "black" }}
              to={{ type: ROUTES.TODO, payload: { id: todo.id } }}
            >
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

const makeMapStateToProps = (_, props) => {
  const getSelectedTodos = makeGetSelectedTodos(props.isChecked);

  return (state, props) => ({
    todos: getSelectedTodos(state, props)
  });
}

const mapDispatchToProps = (dispatch) => ({
  todosUpdateReq: (id, data) => dispatch(todosUpdateReq(id, data)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(TodoList);
