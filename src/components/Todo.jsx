import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { todosUpdateReq } from "../actions";
import Loader from "./Loader";

const Todo = ({
  id,
  todo,
  user,
  todosUpdateReq,
  isLoading
}) => {

  const [todoFormData, setTodoFormData] = useState({
    title: "",
    completed: false,
    isUpdated: false,
  });

  useEffect(() => {
    if (todo)
      setTodoFormData({
        isUpdated: false,
        title: todo.title,
        completed: todo.completed,
      });
  }, [todo]);

  const handleFormData = (event) => {
    setTodoFormData({
      ...todoFormData,
      isUpdated: true,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    todosUpdateReq(id, {
      title: todoFormData.title,
      completed: todoFormData.completed,
    });
  };

  return (
    <section className="container">
      {isLoading && <Loader />}
      <h1 className="text-center">Update Todo</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            onChange={handleFormData}
            type="text"
            className="form-control form-control-lg"
            id="title"
            value={
              todoFormData.isUpdated
                ? todoFormData.title
                : todo
                ? todo.title
                : ""
            }
          />
        </div>
        <div className="mb-3 form-check">
          <input
            onChange={handleFormData}
            type="checkbox"
            className="form-check-input"
            id="completed"
            checked={
              todoFormData.isUpdated
                ? todoFormData.completed
                : todo
                ? todo.completed
                : false
            }
          />
          <label className="form-check-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div className="mb-3">
          {user && (
            <p>
              Created by <b>{user.name}</b>{" "}
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-warning">
          Update
        </button>
      </form>
    </section>
  );
};

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
  todosUpdateReq: (id, data) => dispatch(todosUpdateReq(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
