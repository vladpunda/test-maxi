import classes from "../UsersList.module.scss";

export default function UsersRow({ user, onChek }) {
  return (
    <tr className={user.chekbox ? classes.onchek : ""}>
      <td>
        {user.id}
        <input name="choice" type="checkbox" onChange={() => onChek(user.id)} />
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
