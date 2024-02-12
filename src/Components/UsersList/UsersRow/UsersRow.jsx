import classes from "../UsersList.module.scss";
import PropTypes from "prop-types";
function UsersRow({ user, onCheck }) {
  return (
    <tr className={user.checkbox ? classes.onCheck : ""}>
      <td>
        <div>
          <input
            name="choice"
            type="checkbox"
            onChange={() => onCheck(user.id)}
          />
          <span> {user.id}</span>
        </div>
      </td>
      <td>
        <span>{user.name.slice(0, 1)}</span>
      </td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user?.address?.zipcode}</td>
    </tr>
  );
}
UsersRow.propTypes = {
  user: PropTypes.object,
  onCheck: PropTypes.func,
};
export default UsersRow;
