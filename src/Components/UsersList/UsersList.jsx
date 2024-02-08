import UsersHeader from "./UsersHeader/UsersHeader";
import UsersRow from "./UsersRow/UsersRow";
import classes from "./UsersList.module.scss";
import { useState } from "react";

export default function UsersList({ users }) {
  const [sort, setSort] = useState({
    field: null,
    direction: "asc",
    secondField: null,
  });

  const dynamicSort = (key, direction, secondKey) => {
    return function (a, b) {
      if (secondKey) {
        if (a[key][secondKey] < b[key][secondKey])
          return direction === "asc" ? -1 : 1;
        if (a[key][secondKey] > b[key][secondKey])
          return direction === "asc" ? 1 : -1;
      } else {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      }

      return 0;
    };
  };

  const sortUsers = (field, secondField) => {
    if (sort.field === field) {
      setSort({
        ...sort,
        direction: sort.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSort({
        field,
        direction: "asc",
        secondField,
      });
    }
  };
  const sortedUsers = [...users].sort(
    dynamicSort(sort.field, sort.direction, sort.secondField)
  );
  return (
    <div>
      <table className={classes.table}>
        <thead>
          <UsersHeader sortUsers={sortUsers} />
        </thead>
        <tbody>
          {sortedUsers.map((user) => {
            return <UsersRow user={user} key={user.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
