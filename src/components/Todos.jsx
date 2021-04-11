import { connect } from "react-redux";
import { getIsLoading } from "../selectors";
import Loader from "./Loader";
import SelectUser from "./SelectUser";
import TodoList from "./TodoList";

const Todos = ({ isLoading }) => {
  return (
    <section className="container">
      {(isLoading) && <Loader />}
      <h1>Todos</h1>

      <SelectUser />

      <div className="row">
        <div className="col-md-6 mb-4">
          <TodoList isChecked={false} title="Incomplete Todos" />
        </div>
        <div className="col-md-6">
          <TodoList isChecked={true} title="Completed Todos" />
        </div>
      </div>

    </section>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state)
});

export default connect(mapStateToProps)(Todos);
