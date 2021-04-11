import { ROUTES } from "../constants";
import { NavLink } from "redux-first-router-link";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={{ type: ROUTES.HOME }}>
          Todo App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={{ type: ROUTES.HOME }}
                exact={true}
                className="nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={{ type: ROUTES.TODOS }}
                className="nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Todos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={{ type: ROUTES.USERS }}
                className="nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
