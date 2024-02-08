import { ReactComponent as SortIcon } from "../../../Assets/Icons/sort-svgrepo-com.svg";
import classes from "./UsersHeader.module.scss";
export default function UsersHeader({ sortUsers }) {
  return (
    <tr>
      <th className={classes.sortButton}>
        id
        <button type="button" onClick={() => sortUsers("id")}>
          <SortIcon />
        </button>
      </th>
      <th>ava</th>
      <th className={classes.sortButton}>
        name
        <button type="button" onClick={() => sortUsers("name")}>
          <SortIcon />
        </button>
      </th>
      <th>username</th>
      <th>email</th>
      <th>phone</th>
      <th className={classes.sortButton}>
        zipcode
        <button type="button" onClick={() => sortUsers("address", "zipcode")}>
          <SortIcon />
        </button>
      </th>
    </tr>
  );
}
