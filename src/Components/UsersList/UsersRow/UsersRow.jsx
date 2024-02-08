export default function UsersRow({ user }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <span>{user.name.slice(0, 1)}</span>
      </td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address.zipcode}</td>
    </tr>
  );
}
