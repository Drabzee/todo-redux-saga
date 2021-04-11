import { connect } from 'react-redux';
import { changeCurrentUser } from '../actions';

const SelectUser = ({changeCurrentUser, users}) => {

  const handleUserSelect = (e) => {
    changeCurrentUser(e.target.value);
  };

  return (users.currentUser !== null)
    ? (
      <div className="user-select col-md-4 my-5 mx-auto">
        <h3 className="text-center">Select User</h3>
        <select
          onChange={handleUserSelect}
          defaultValue={users.currentUser}
          className="form-select mt-3"
        >
          <option key={0} value={0}>
            Select
          </option>
          {users.data.allIds.map((id) => (
            <option key={id} value={id}>
              {users.data.byId[id].name}
            </option>
          ))}
        </select>
      </div>
    )
    : null;
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = (dispatch) => ({
  changeCurrentUser: (id) => dispatch(changeCurrentUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser)
