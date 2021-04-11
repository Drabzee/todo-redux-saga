import { ROUTES } from "../constants";
import { NavLink } from "redux-first-router-link";

const Home = () => {
  return (
    <section className="container">
      <h1>Home</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Todos</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <NavLink to={{ type: ROUTES.TODOS }} className="btn btn-primary">
                List Todos
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2 mt-md-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <NavLink to={{ type: ROUTES.USERS }} className="btn btn-primary">
                List Users
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
