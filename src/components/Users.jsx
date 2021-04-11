import { connect } from "react-redux";
import Loader from "./Loader";

const Users = ({ isLoading, users }) => {

  return (
    <section className="container">
      {isLoading && <Loader />}
      <h1>Users</h1>

      <div className="user-grid">
        {users.allIds.map((id) => (
          <div key={id} className="card text-white bg-dark">
            <div className="card-header">@{users.byId[id].username}</div>
            <div className="card-body">
              <h5 className="card-title">{users.byId[id].name}</h5>
              <p className="card-text">{users.byId[id].email}</p>
              <p className="card-text">{`${users.byId[id].address.street}, ${users.byId[id].address.suite}, ${users.byId[id].address.city} (${users.byId[id].address.zipcode})`}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = ({ users }) => ({
  isLoading: users.isLoading,
  users: users.data,
});

export default connect(mapStateToProps)(Users);
