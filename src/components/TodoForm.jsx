import { useEffect, useState } from "react";
import Loader from "./Loader";
import SelectUser from "./SelectUser";

const AddTodo = ({
  id,
  todo,
  user,
  formSubmitAction,
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
    formSubmitAction({
      title: todoFormData.title,
      completed: todoFormData.completed,
    }, id);
  };

  return (
    <section className="container">
      {isLoading && <Loader />}
      <h1 className="text-center">{todo ? 'Update' : 'Add'} Todo</h1>
      
      {!todo && <SelectUser />}

      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            onChange={handleFormData}
            type="text"
            className="form-control form-control-lg"
            id="title"
            placeholder="Buy Milk"
            required={true}
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
        <button type="submit" className={`btn btn-${todo ? 'warning' : 'success'}`}>
          {todo ? 'Update' : 'Add Todo'}
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
